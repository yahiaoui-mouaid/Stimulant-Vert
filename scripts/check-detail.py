"""Checks whether an image has real photographic detail (edge energy) or is mostly flat."""
import sys
from PIL import Image, ImageFilter, ImageStat

def detail(path):
    im = Image.open(path).convert('RGB')
    im.thumbnail((400, 400))
    gray = im.convert('L')
    edges = gray.filter(ImageFilter.Kernel((3, 3), (-1, -1, -1, -1, 8, -1, -1, -1, -1), 1, 0))
    st = ImageStat.Stat(edges)
    edge_energy = st.mean[0]
    color_std = ImageStat.Stat(im).stddev
    return edge_energy, color_std

for p in sys.argv[1:]:
    e, c = detail(p)
    verdict = 'FLAT/blurry' if e < 8 else ('OK detail' if e < 25 else 'RICH detail')
    print(f"{p.split(chr(92))[-1]:<24} edge_energy={e:6.2f}  color_std=({c[0]:5.1f},{c[1]:5.1f},{c[2]:5.1f})  {verdict}")
