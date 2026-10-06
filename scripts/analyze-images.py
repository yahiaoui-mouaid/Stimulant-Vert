"""Analyzes downloaded photos: dominant colors and hue-band percentages, to infer content."""
import sys, glob, os, colorsys
from PIL import Image

def analyze(path, sample=160):
    im = Image.open(path).convert("RGB")
    im.thumbnail((sample, sample))
    px = list(im.getdata())
    n = len(px)
    bands = {"red":0,"orange":0,"yellow":0,"green":0,"cyan":0,"blue":0,"magenta":0,"gray":0}
    lums = []
    for r,g,b in px:
        lums.append(0.299*r+0.587*g+0.114*b)
        mx,mn = max(r,g,b), min(r,g,b)
        if mx-mn < 24:
            bands["gray"] += 1; continue
        h,s,v = colorsys.rgb_to_hsv(r/255,g/255,b/255)
        deg = h*360
        if s < 0.18: bands["gray"] += 1
        elif deg < 15 or deg >= 345: bands["red"] += 1
        elif deg < 40: bands["orange"] += 1
        elif deg < 66: bands["yellow"] += 1
        elif deg < 165: bands["green"] += 1
        elif deg < 200: bands["cyan"] += 1
        elif deg < 260: bands["blue"] += 1
        else: bands["magenta"] += 1
    # dominant quantized colors
    q = {}
    for r,g,b in px:
        k = (r//32*32, g//32*32, b//32*32)
        q[k] = q.get(k,0)+1
    top = sorted(q.items(), key=lambda x:-x[1])[:4]
    topstr = ", ".join(f"#{r:02x}{g:02x}{b:02x}({c*100//n}%)" for (r,g,b),c in top)
    pct = {k: round(v*100/n) for k,v in sorted(bands.items(), key=lambda x:-x[1]) if v*100/n >= 3}
    lum = sum(lums)//n
    return pct, lum, topstr

for p in sorted(glob.glob(os.path.join(os.path.dirname(__file__), "..", "public", "images", "raw", "*.jpg"))):
    pct, lum, top = analyze(p)
    name = os.path.basename(p)
    print(f"{name}")
    print(f"    bands={pct}  brightness={lum}  top={top}")
