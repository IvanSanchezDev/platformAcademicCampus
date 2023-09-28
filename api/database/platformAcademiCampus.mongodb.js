use('platform_academic_campus')
db.createCollection('cursos', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['_id', 'nombre','titulo', 'objetivos', 'temas', 'autor'],
        properties: {
          _id: {
            bsonType: 'objectId',
            description: 'El _id es requerido y de tipo ObjectId'
          },
          nombre: {
            bsonType: 'string',
            description: 'El nombre es requerido y de tipo string'
          },
          titulo: {
            bsonType: 'string',
            description: 'El titulo es requerido y de tipo string'
          },
          autor: {
            bsonType: 'string',
            description: 'El instructor es requerido y de tipo string'
          },
          portada: {
            bsonType: 'string',
            description: 'La descripcion es requerida y de tipo string'
          },
          temas:{
            bsonType:'array',
            items:{
              bsonType:'string'
            }
          },
          Objetivos:{
            bsonType:'array',
            items:{
              bsonType:'string'
            }
          },
         
          nivel: {
            bsonType: 'string',
            description: 'El nivel es requerido y de tipo string'
          },
          comentarios: {
            bsonType: 'array',
            description: 'Los comentarios son  de tipo array',
            items: {
              bsonType: 'object',
              required: ['nombre_usuario', 'texto'],
              properties: {
                nombre_usuario: {
                  bsonType: 'string',
                  description: 'El nombre del usuario requerido y de tipo String'
                },
                texto: {
                  bsonType: 'string',
                  description: 'El texto del comentario es requerido y de tipo string'
                }
              }
            } 
          }     
        }
      }
    }
  })
  

  use('platform_academic_campus')
  db.createCollection('usuarios', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['_id', 'discord_id', 'nombre_usuario', 'correo_electronico'],
        properties: {
          _id: {
            bsonType: 'objectId',
            description: 'El _id es requerido y de tipo ObjectId'
          },
          discord_id: {
            bsonType: 'string',
            description: 'El codigo de discord es requerido y de tipo string'
          },
          nombre_usuario: {
            bsonType: 'string',
            description: 'El username es requerido y de tipo string'
          },
          correo_electronico: {
            bsonType: 'string',
            description: 'El email es requerido y de tipo string'
          },
          imagen_perfil: {
            bsonType: 'string',
            description: 'La url de la imagen_perfil es de tipo string'
          },
          biografia: {
            bsonType: 'string',
            description: 'La biografia es de tipo string'
          },
          cursos_matriculados: {
            bsonType: 'array',
            description: 'Los cursos matriculados son de tipo array',
            items: {
              bsonType: 'string',
              description: 'Cada elemento en cursos matriculados debe ser un string'
            }
          },
          rol: {
            enum: ['camper', 'trainer'],
            description: 'El rol debe ser uno de los siguientes: "camper" o "trainer"'
          }
        }
      }
    }
  })
  

  use('platform_academic_campus')
  db.cursos.insertMany([ {
    "nombre": "react",
    "titulo": "Curso completo de Reactjs: De cero a avanzado.",
    "autor": "Fernando herrera",
    "portada": "src/images/img_reactjs.jpg",
    "temas": ["Context API", "MERN", "Hooks", "Firestore", "JWT", "Multiple Routers."],
    "objetivos": ["Aprender React a profundidad", "MERN - Mongo Express React Node", "Redux, Context y otros manejadores de estado"],
    "comentarios":[{"nombre_usuario":"ivansachez24", "texto":"Excelente el curso"},{"nombre_usuario":"kamilo13", "texto":"Recomendado"}]
  },
  {
    "nombre": "docker",
    "titulo": "Curso completo de Docker: Contenedores y Orquestación",
    "autor": "Juan Pérez",
    "portada": "https://geekflare.com/wp-content/uploads/2019/10/docker-logo.png",
    "temas": ["Introducción a Docker", "Docker Compose", "Kubernetes", "Despliegue de aplicaciones", "Gestión de imágenes"],
    "objetivos": ["Aprender a crear y gestionar contenedores con Docker", "Orquestar contenedores en Kubernetes", "Desplegar aplicaciones en entornos de producción"]
  },
  {
    "nombre": "git",
    "titulo": "Curso completo de Git y Control de Versiones",
    "autor": "María González",
    "portada": "https://i.ytimg.com/vi/HiXLkL42tMU/maxresdefault.jpg",
    "temas": ["Fundamentos de Git", "Control de versiones distribuido", "Ramificación (Branching)", "Resolución de conflictos", "Colaboración en proyectos"],
    "objetivos": ["Dominar Git y el control de versiones", "Colaborar eficazmente en proyectos de desarrollo de software"]
  },
  {
    "nombre": "nodejs",
    "titulo": "Curso completo de Node.js: Desarrollo de Aplicaciones Web",
    "autor": "Luis Martínez",
    "portada": "https://i.ytimg.com/vi/BhvLIzVL8_o/maxresdefault.jpg",
    "temas": ["Introducción a Node.js", "Express.js", "Manejo de paquetes con NPM", "Desarrollo de API RESTful", "Bases de datos con Node.js"],
    "objetivos": ["Aprender a construir aplicaciones web utilizando Node.js", "Crear API RESTful y trabajar con bases de datos en Node.js"]
  },
  {
    "nombre": "sql",
    "titulo": "Curso completo de SQL: Fundamentos y Bases de Datos",
    "autor": "Ana Sánchez",
    "portada": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZG4ONsagb7g9wgL0g5HV2B0KDxESfKJ1ig&usqp=CAU",
    "temas": ["Bases de datos relacionales", "Lenguaje SQL", "Consultas SELECT", "Diseño de bases de datos", "Optimización de consultas"],
    "objetivos": ["Dominar SQL y el diseño de bases de datos relacionales", "Realizar consultas eficientes y optimizar el rendimiento de las bases de datos"]
  }])