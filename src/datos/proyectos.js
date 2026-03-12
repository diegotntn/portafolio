import alzheimer1 from "../assets/proyectos/alzheimer1.png";
import alzheimer2 from "../assets/proyectos/alzheimer2.png";


const l_proyectos = [
   {
    id: 1,
    titulo: "Detección temprana de Alzheimer con CNN",
    descripcionCorta:
      "Modelo CNN para clasificación de imágenes MRI en detección temprana.",
    contexto: "UPIIT–IPN | ADNI Dataset",
    descripcion:
      "Desarrollo de un modelo CNN para clasificar imágenes MRI en la detección temprana de Alzheimer. Incluyó preprocesamiento, entrenamiento con PyTorch/TensorFlow y evaluación de desempeño clínicamente relevante.",
    tecnologias: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Deep Learning",
      "Medical Imaging",
    ],
    links: [],
    imagenes: [
      alzheimer1,
      alzheimer2
    ],
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
    descripcionCorta:
      "Sitios web desarrollados en WordPress",
    contexto: "Freelance",
    descripcion:
      "Desarrollo de sitios web en WordPress, enfocados en presencia digital profesional y estructura clara de contenido.",
    tecnologias: ["WordPress", "HTML", "CSS"],
    links: [
      {
        nombre: "PlusMedic",
        url: "https://plusmedic.mx/",
      },
      {
        nombre: "Agrobeen",
        url: "https://agrobeen.com/",
      },
    ],
    imagen: null,
  },
];

export default l_proyectos;