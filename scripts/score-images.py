"""Scores candidate photos: sharpness (Laplacian variance), exposure, contrast, saturation."""
import glob, os, json
from PIL import Image, ImageFilter, ImageStat, ImageChops

def laplacian(gray):
    # 3x3 Laplacian kernel via ImageFilter.Kernel
    return gray.filter(ImageFilter.Kernel((3, 3), (0, 1, 0, 1, -4, 1, 0, 1, 0), 1, 0))

def score(path):
    im = Image.open(path).convert("RGB")
    im.thumbnail((512, 512))
    gray = im.convert("L")
    lap = laplacian(gray)
    stat = ImageStat.Stat(lap)
    sharpness = stat.stddev[0] ** 2
    gstat = ImageStat.Stat(gray)
    lum = gstat.mean[0]
    contrast = gstat.stddev[0]
    # saturation = mean of max-min across channels
    px = list(im.getdata())
    n = len(px)
    sat = sum(max(r, g, b) - min(r, g, b) for r, g, b in px) / (3 * n)
    return {"sharp": round(sharpness, 1), "lum": round(lum, 1), "contrast": round(contrast, 1), "sat": round(sat, 1)}

rows = []
for p in sorted(glob.glob(os.path.join(os.path.dirname(__file__), "..", "public", "images", "cand", "*", "*.jpg"))):
    s = score(p)
    cat = os.path.basename(os.path.dirname(p))
    rows.append({"cat": cat, "file": os.path.basename(p), **s})

rows.sort(key=lambda r: r["cat"])
for r in rows:
    print(f"{r['cat']:<11} sharp={r['sharp']:>7} lum={r['lum']:>5} contrast={r['contrast']:>5} sat={r['sat']:>5}  {r['file']}")
with open(os.path.join(os.path.dirname(__file__), "quality-report.json"), "w") as f:
    json.dump(rows, f, indent=2)
