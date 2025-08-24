// Script para generar PDF de la lista de precios actualizada
// Panadería La Delicia - Enero 2025

function generarPDF() {
    // Datos actualizados de los productos
    const productos = [
        { nombre: "Orejas", precio: 0.60, paquete: "" },
        { nombre: "Herraduras", precio: 0.65, paquete: "" },
        { nombre: "Cañon", precio: 0.65, paquete: "" },
        { nombre: "Empanada de pollo", precio: 0.65, paquete: "" },
        { nombre: "Empanada de carne", precio: 0.65, paquete: "" },
        { nombre: "Empanada de queso crema", precio: 0.65, paquete: "" },
        { nombre: "Empanada de manjar", precio: 0.65, paquete: "" },
        { nombre: "Empanada de jamón y queso", precio: 0.65, paquete: "" },
        { nombre: "Pan moña", precio: 0.65, paquete: "PAQ. DE 3 PAN X 0.65" },
        { nombre: "Pan de mantequilla", precio: 0.65, paquete: "PAQ. DE 6 PAN X 0.65" },
        { nombre: "Pan michita", precio: 0.65, paquete: "PAQ. DE 6 PAN X 0.65" },
        { nombre: "Pan gusanito de guayaba", precio: 0.20, paquete: "" },
        { nombre: "Pan dulce de guayaba", precio: 0.15, paquete: "" },
        { nombre: "Pan agridulce", precio: 0.15, paquete: "" },
        { nombre: "Pan dulce de manjar", precio: 0.15, paquete: "" },
        { nombre: "Pan piñita", precio: 0.65, paquete: "PAQ. DE 6 PAN X 0.65" },
        { nombre: "Pan pañuelo de manjar", precio: 0.40, paquete: "" },
        { nombre: "Pan bolita de huevo", precio: 0.65, paquete: "PAQ. DE 6 PAN X 0.65" },
        { nombre: "Pan de canela", precio: 0.70, paquete: "" },
        { nombre: "Pan de salchicha", precio: 0.45, paquete: "" },
        { nombre: "Pan de queso", precio: 0.90, paquete: "" },
        { nombre: "Pan moña con queso", precio: 0.90, paquete: "" },
        { nombre: "Croisant de jamón y queso", precio: 0.75, paquete: "" },
        { nombre: "Croisant de queso", precio: 0.70, paquete: "" },
        { nombre: "Pan tortuga de queso", precio: 0.75, paquete: "" },
        { nombre: "Pan pizza hawaiana", precio: 0.70, paquete: "" },
        { nombre: "Croisant queso crema", precio: 0.70, paquete: "" },
        { nombre: "Pan pizza de manjar", precio: 0.50, paquete: "" },
        { nombre: "Pan mini hot dog", precio: 1.90, paquete: "PAQ. DE 10 PAN X 1.90" },
        { nombre: "Pan hamburguesa", precio: 2.10, paquete: "PAQ. DE 12 PAN X 2.10" },
        { nombre: "Pan hot dog jumbo", precio: 2.50, paquete: "PAQ. DE 12 PAN X 2.50" },
        { nombre: "Flautas (pan francés)", precio: 0.50, paquete: "" },
        { nombre: "Galletas de chip de chocolate", precio: 0.30, paquete: "" },
        { nombre: "Galletas de chip de colores", precio: 0.30, paquete: "" },
        { nombre: "Galletas de mantecado", precio: 0.30, paquete: "" },
        { nombre: "Galletas de matrimonio manjar y coco", precio: 0.60, paquete: "" },
        { nombre: "Galletas punto rojo", precio: 0.30, paquete: "" },
        { nombre: "Achira (pan de arena)", precio: 0.13, paquete: "" },
        { nombre: "Donas azucaradas", precio: 0.50, paquete: "" },
        { nombre: "Donas rellenas de crema", precio: 0.55, paquete: "" },
        { nombre: "Donas rellenas de manjar", precio: 0.55, paquete: "" },
        { nombre: "Donas glaseadas de chocolate", precio: 0.55, paquete: "" },
        { nombre: "Donas glaseadas de choco blanco", precio: 0.55, paquete: "" },
        { nombre: "Deditos de queso", precio: 0.50, paquete: "" },
        { nombre: "Pan cortado de manjar", precio: 0.70, paquete: "" },
        { nombre: "Porción de dulce de vainilla", precio: 0.70, paquete: "" },
        { nombre: "Porción de dulce de chocolate", precio: 0.70, paquete: "" },
        { nombre: "Porción de dulce vainichocolate", precio: 0.70, paquete: "" },
        { nombre: "Mini cookies chocolate", precio: 0.60, paquete: "PAQ. DE 6 COOKIES X 0.60" },
        { nombre: "Mini cookies vainilla", precio: 0.60, paquete: "PAQ. DE 6 COOKIES X 0.60" },
        { nombre: "Cookies de vainilla", precio: 0.60, paquete: "" },
        { nombre: "Cookies de chocolate", precio: 0.30, paquete: "" },
        { nombre: "Ponque de vainillachocolate con crema", precio: 0.50, paquete: "" }
    ];

    // Función para validar precios (evitar división por cero)
    function validarPrecio(precio) {
        return precio > 0 ? precio : 0.01; // Precio mínimo para evitar errores
    }

    // Generar contenido del PDF
    console.log("Lista de Precios Actualizada - Panadería La Delicia");
    console.log("===================================================");
    console.log("Vigente desde: Enero 2025");
    console.log("Versión: 2.0");
    console.log("===================================================");
    
    productos.forEach(producto => {
        const precioValidado = validarPrecio(producto.precio);
        const por100 = (precioValidado * 100).toFixed(2);
        
        console.log(`${producto.nombre}:`);
        console.log(`  Precio: $${precioValidado.toFixed(2)}`);
        console.log(`  100 unidades: $${por100}`);
        if (producto.paquete) {
            console.log(`  Paquete: ${producto.paquete}`);
        }
        console.log("---");
    });
    
    console.log("\nTérminos y Condiciones:");
    console.log("• Pedido mínimo: $100.00 USD");
    console.log("• Cantidad mínima: 100 piezas");
    console.log("• Tiempo de entrega: 1 día hábil");
    console.log("• Horario de pedidos: Oficina");
    console.log("\nContacto: WhatsApp +507 6298-2064");
}

// Ejecutar función
if (typeof window === 'undefined') {
    // Solo ejecutar en Node.js, no en el navegador
    generarPDF();
}