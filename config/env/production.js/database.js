const parse = require('pg-connection-string');

module.exports = ({ env }) => {
  const {host, port, database, user, password} = parse(env("DATABASE_URL"));
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host,
            port,
            database,
            username:user,
            password,
          },
          options: {
            ssl: false,
          },
        },
      },
    }
  }
  
//   return {
//     defaultConnection: 'default',
//     connections: {
//       default: {
//         connector: 'bookshelf',
//         settings: {
//           client: 'sqlite',
//           filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//         },
//         options: {
//           useNullAsDefault: true,
//         },
//       },
//     },
//   }
// };