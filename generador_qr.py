import qrcode
from PIL import Image

def generar_qr(url, nombre_archivo):
    """
    Genera un código QR a partir de una URL y lo guarda como un archivo de imagen.

    Args:
        url (str): La URL a la que el código QR debe dirigir.
        nombre_archivo (str): El nombre del archivo de imagen para guardar el QR (ej. 'codigo_qr.jpg').
    """
    try:
        # Crear el objeto QR
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )

        # Añadir los datos (la URL)
        qr.add_data(url)
        qr.make(fit=True)

        # Crear la imagen del QR en modo RGB para guardarla como JPG
        img = qr.make_image(fill_color="black", back_color="white").convert('RGB')

        # Guardar la imagen
        img.save(nombre_archivo)
        print(f"¡Código QR guardado como '{nombre_archivo}' exitosamente!")

    except ImportError:
        print("\n--- ERROR ---")
        print("Parece que no tienes las librerías necesarias instaladas.")
        print("Por favor, instálalas ejecutando el siguiente comando en tu terminal:")
        print("pip install qrcode Pillow")
        print("--------------")


if __name__ == "__main__":
    # --- Configuración ---
    # URL para el código QR
    direccion_url = "https://dulces.conectandopersonas.life/"
    # Nombre del archivo de salida
    nombre_del_archivo = "codigo_qr.jpg"
    
    print(f"Generando código QR para: {direccion_url}")
    
    # Llamar a la función para generar el QR
    generar_qr(direccion_url, nombre_del_archivo)

    print("\n--- Instrucciones de uso ---")
    print("1. Abre una terminal o línea de comandos.")
    print("2. Asegúrate de tener las librerías necesarias. Si no las tienes, ejecuta: pip install qrcode Pillow")
    print(f"3. Ejecuta este script con el comando: python generador_qr.py")
    print(f"4. Se creará un archivo de imagen llamado '{nombre_del_archivo}' en este mismo directorio.")
    print("----------------------------")