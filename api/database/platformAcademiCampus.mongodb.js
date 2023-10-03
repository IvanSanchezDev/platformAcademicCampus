use('platform_academic_campus')
db.createCollection('cursos', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['_id', 'folder','nameCourse', 'objetivos', 'temas', 'autor'],
        properties: {
          _id: {
            bsonType: 'objectId',
            description: 'El _id es requerido y de tipo ObjectId'
          },
          folder: {
            bsonType: 'string',
            description: 'El nombre es requerido y de tipo string'
          },
          nameCourse: {
            bsonType: 'string',
            description: 'El titulo es requerido y de tipo string'
          },
          autor: {
            bsonType: 'string',
            description: 'El instructor es requerido y de tipo string'
          },
          duracion:{
            bsonType:'number',
            description:'la duracion es numerica'
          },
          imagenCourse: {
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
                rating:{
                  bsonType: 'number',
                  description: 'El rating es numerico'
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
          }        
        }
      }
    }
  })

  use('platform_academic_campus')
  db.createCollection('inscripcionesCursos', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['_id', 'nombre_curso', 'nombre_usuario'],
        properties: {
          _id: {
            bsonType: 'objectId',
            description: 'El _id es requerido y de tipo ObjectId'
          },
          nombre_curso: {
            bsonType: 'string',
            description: 'El nombre del curso es requerido y de tipo string'
          },
          nombre_usuario: {
            bsonType: 'string',
            description: 'El username es requerido y de tipo string'
          },
          progreso:{
            bsonType:'number',
            description:'el progreso es de tipo number'
          }
          
          
        }
        
      }
    }
  })
  

  use('platform_academic_campus')
  db.cursos.insertMany([ {
    "folder": "react",
    "nameCourse": "React: De cero a experto ( Hooks y MERN )",
    "imagenCourse": "https://import.cdn.thinkific.com/643563/courses/1901683/3leYeOG2Qcu7PEZ1el4q_react.jpg",
    "duracion": 179499638,
    "autor":"Fernando Herrera",
    "temas": ["Context API", "MERN", "Hooks", "Firestore", "JWT", "Multiple Routers."],
    "objetivos": ["Aprender React a profundidad", "MERN - Mongo Express React Node", "Redux, Context y otros manejadores de estado"],
    "comentarios":[{"nombre_usuario":"kamilo13", "rating":4, "texto":"Recomendado"}]
  },
  {
    "folder": "docker",
    "nameCourse": "Docker - Guía práctica de uso para desarrolladores",
    "imagenCourse": "https://import.cdn.thinkific.com/643563/courses/2100309/FJdi8w3ORKSdzhLcV53c_Docker.jpg",
    "duracion": 49535654,
    "autor":"Fernando Herrera",
    "temas": ["Introducción a Docker", "Docker Compose", "Kubernetes", "Despliegue de aplicaciones", "Gestión de imágenes"],
    "objetivos": ["Aprender a crear y gestionar contenedores con Docker", "Orquestar contenedores en Kubernetes", "Desplegar aplicaciones en entornos de producción"]
  },
  {
    "folder": "git",
    "nameCourse": "GIT+GitHub: Todo un sistema de control de versiones de cero",
    "imagenCourse": "https://import.cdn.thinkific.com/643563/courses/1870146/idTZJiouTqWbJrtKBloh_git-github.jpg",
    "duracion": 41102686,
    "autor":"Fernando Herrera",
    "temas": ["Fundamentos de Git", "Control de versiones distribuido", "Ramificación (Branching)", "Resolución de conflictos", "Colaboración en proyectos"],
    "objetivos": ["Dominar Git y el control de versiones", "Colaborar eficazmente en proyectos de desarrollo de software"]
  },
  {
    "folder": "nodejs",
    "nameCourse": "Node.Js: De cero a experto",
    "imagenCourse": "https://import.cdn.thinkific.com/643563/63BJ0OoTdCl8SPMlIOpA_NODE-JS-COVER-CURSO.jpg",
    "duracion": 85942936,
    "autor":"Fernando Herrera",
    "temas": ["Introducción a Node.js", "Express.js", "Manejo de paquetes con NPM", "Desarrollo de API RESTful", "Bases de datos con Node.js"],
    "objetivos": ["Aprender a construir aplicaciones web utilizando Node.js", "Crear API RESTful y trabajar con bases de datos en Node.js"]
  },
  {
    "folder": "sql",
    "nameCourse": "SQL de cero: Tu guía práctica con PostgreSQL",
    "imagenCourse": "https://import.cdn.thinkific.com/643563/courses/2347687/yqioXcxTsWUJ7foeQFZl_SQL-COVER-CURSO.jpg",
    "duracion": 57502789,
    "autor":"Fernando Herrera",
    "temas": ["Bases de datos relacionales", "Lenguaje SQL", "Consultas SELECT", "Diseño de bases de datos", "Optimización de consultas"],
    "objetivos": ["Dominar SQL y el diseño de bases de datos relacionales", "Realizar consultas eficientes y optimizar el rendimiento de las bases de datos"]
  }])