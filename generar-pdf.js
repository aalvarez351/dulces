// Script para generar PDF de la lista de precios
// Usar con jsPDF o similar

function generarPDF() {
    // Datos de los productos
    const productos = [
        { nombre: "Canon", mayorista: 0.75, detal: 1.25 },
        { nombre: "Croissant", mayorista: 0.50, detal: 1.00 },
        { nombre: "Donas Rellenas", mayorista: 0.65, detal: 1.25 },
        { nombre: "Pan de Guayaba con Queso", mayorista: 0.75, detal: 1.25 },
        { nombre: "Herradura", mayorista: 0.65, detal: 1.25 },
        { nombre: "Pinita", mayorista: 0.18, detal: 0.25 },
        { nombre: "Mil Hojas", mayorista: 0.91, detal: 1.25 },
        { nombre: "Orejas", mayorista: 0.77, detal: 1.00 },
        { nombre: "Pan de Mantequilla", mayorista: 0.30, detal: 0.50 },
        { nombre: "Pan de Queso Mediano", mayorista: 0.55, detal: 1.00 },
        { nombre: "Flauta", mayorista: 0.77, detal: 1.00 },
        { nombre: "Michita Suave", mayorista: 0.16, detal: 0.25 },
        { nombre: "Michita de Huevo", mayorista: 0.20, detal: 0.50 },
        { nombre: "Pan de Agridulce", mayorista: 0.30, detal: 1.00 },
        { nombre: "Pan de Canela", mayorista: 0.65, detal: 1.00 },
        { nombre: "Mamallena", mayorista: 0.60, detal: 1.00 },
        { nombre: "Pastelito", mayorista: 0.45, detal: 1.00 },
        { nombre: "Bizcocho", mayorista: 0.50, detal: 1.00 }
    ];

    // Función para calcular margen
    function calcularMargen(mayorista, detal) {
        return Math.round(((detal - mayorista) / mayorista) * 100);
    }

    // Generar contenido del PDF
    console.log("Lista de Precios - Panadería La Delicia");
    console.log("=====================================");
    
    productos.forEach(producto => {
        const margen = calcularMargen(producto.mayorista, producto.detal);
        const por100 = (producto.mayorista * 100).toFixed(2);
        
        console.log(`${producto.nombre}:`);
        console.log(`  Mayorista: $${producto.mayorista.toFixed(2)}`);
        console.log(`  100 unidades: $${por100}`);
        console.log(`  Detal: $${producto.detal.toFixed(2)}`);
        console.log(`  Margen: ${margen}%`);
        console.log("---");
    });
}

// Ejecutar función
generarPDF();