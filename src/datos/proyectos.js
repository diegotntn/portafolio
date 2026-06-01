import alzheimer1 from "../assets/proyectos/alzheimer1.png";
import alzheimer2 from "../assets/proyectos/alzheimer2.png";
import alzheimer3 from "../assets/proyectos/alzheimer3.png";


const l_proyectos = [
  {
    id: 1,
    titulo: "Detección temprana de Alzheimer con CNN dual",
    descripcionCorta:
      "Modelo de doble CNN para clasificar imágenes MRI en 4 estadios de Alzheimer con TensorFlow.",
    contexto: "UPIIT–IPN | ADNI Dataset",
    descripcion:
      "Desarrollo de una arquitectura CNN dual (kernels 3×3 y 5×5 en paralelo) para clasificar imágenes MRI cerebrales en cuatro estadios: AD, CN, EMCI y LMCI. El modelo usa Mixed Precision, BatchNormalization y Dropout para estabilizar el entrenamiento. Incluye preprocesamiento con ImageDataGenerator, evaluación con matriz de confusión, classification report y visualización de curvas de accuracy/loss por época.",
    tecnologias: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "Mixed Precision",
      "Medical Imaging",
      "Google Colab",
    ],
    links: [],
    imagenes: [alzheimer1, alzheimer2, alzheimer3],
  },
  {
    id: 2,
    titulo: "Aplicación móvil de pedidos",
    descripcionCorta:
      "App Android con catálogos, pedidos y sincronización en tiempo real.",
    contexto: "Freelance",
    descripcion:
      "Aplicación Android para visualizar catálogos y gestionar pedidos, con sincronización en tiempo real mediante Firebase, carga automática de catálogos desde Google Drive y exportación de pedidos a Excel.",
    tecnologias: ["Kotlin", "Android", "Firebase", "Google Drive API"],
    links: [],
    imagen: null,
  },
  {
    id: 3,
    titulo: "Sistema de asistencias y pagos para estudio de pilates",
    descripcionCorta:
      "Sistema para gestionar clientes, sesiones, pagos y reportes.",
    contexto: "Freelance",
    descripcion:
      "Sistema automatizado para gestionar clientes, sesiones, pagos y reportes, con exportación a Excel y panel administrativo.",
    tecnologias: ["Python", "SQLite", "Excel", "Gestión administrativa"],
    links: [],
    imagen: null,
  },
  {
    id: 4,
    titulo: "Desarrollo de sitios web",
    descripcionCorta: "Sitios web desarrollados en WordPress.",
    contexto: "Freelance",
    descripcion:
      "Desarrollo de sitios web en WordPress, enfocados en presencia digital profesional y estructura clara de contenido.",
    tecnologias: ["WordPress", "HTML", "CSS"],
    links: [
      { nombre: "PlusMedic", url: "https://plusmedic.mx/" },
      { nombre: "Agrobeen", url: "https://agrobeen.com/" },
    ],
    imagen: null,
  },
];

export default l_proyectos;
