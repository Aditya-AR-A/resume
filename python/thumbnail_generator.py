import os
from pdf2image import convert_from_path
from PIL import Image

pdf_dir = r'd:\\Desktop\\resume\\public\\Cerificates'
thumb_dir = r'd:\\Desktop\\resume\\public\\certificate_thumbnails'

os.makedirs(thumb_dir, exist_ok=True)

for fname in os.listdir(pdf_dir):
    if fname.lower().endswith('.pdf'):
        pdf_path = os.path.join(pdf_dir, fname)
        try:
            # Convert first page only
            pages = convert_from_path(pdf_path, dpi=300, first_page=1, last_page=1)
            if pages:
                thumb_path = os.path.join(thumb_dir, os.path.splitext(fname)[0] + '.png')
                # Optionally resize thumbnail
                thumbnail = pages[0]
                thumbnail.thumbnail((1096, 816))
                thumbnail.save(thumb_path, 'PNG')
                print(f"Thumbnail created for {fname}")
        except Exception as e:
            print(f"Failed for {fname}: {e}")