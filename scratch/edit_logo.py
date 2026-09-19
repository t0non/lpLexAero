from PIL import Image

def process_logo(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            r, g, b, a = item
            # Find white or very light grey pixels (r,g,b > 200)
            if r > 200 and g > 200 and b > 200:
                # Replace with black, keeping original alpha
                new_data.append((0, 0, 0, a))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print("Logo successfully processed and saved to", output_path)
    except Exception as e:
        print("Error processing logo:", e)

if __name__ == "__main__":
    process_logo("public/logo_lexaero.png", "public/logo_lexaero_dark.png")
