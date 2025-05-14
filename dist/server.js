"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.prisma/client/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError,
      PrismaClientUnknownRequestError,
      PrismaClientRustPanicError,
      PrismaClientInitializationError,
      PrismaClientValidationError,
      getPrismaClient,
      sqltag,
      empty,
      join,
      raw,
      skip,
      Decimal,
      Debug,
      objectEnumValues,
      makeStrictEnum,
      Extensions,
      warnOnce,
      defineDmmfProperty,
      Public,
      getRuntime,
      createParam
    } = require("@prisma/client/runtime/library.js");
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "6.6.0",
      engine: "f676762280b54cd07c770017ed3711ddde35f37a"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
    Prisma.PrismaClientValidationError = PrismaClientValidationError;
    Prisma.Decimal = Decimal;
    Prisma.sql = sqltag;
    Prisma.empty = empty;
    Prisma.join = join;
    Prisma.raw = raw;
    Prisma.validator = Public.validator;
    Prisma.getExtensionContext = Extensions.getExtensionContext;
    Prisma.defineExtension = Extensions.defineExtension;
    Prisma.DbNull = objectEnumValues.instances.DbNull;
    Prisma.JsonNull = objectEnumValues.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues.classes.DbNull,
      JsonNull: objectEnumValues.classes.JsonNull,
      AnyNull: objectEnumValues.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.CustomerScalarFieldEnum = {
      id: "id",
      name: "name",
      email: "email",
      status: "status",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports2.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports2.Prisma.ModelName = {
      Customer: "Customer"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\gisla\\Desktop\\devclientes\\backend\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [],
        "sourceFilePath": "C:\\Users\\gisla\\Desktop\\devclientes\\backend\\prisma\\schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "6.6.0",
      "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel Customer {\n  id        String    @id @default(uuid())\n  name      String\n  email     String\n  status    Boolean\n  createdAt DateTime? @default(now())\n  updatedAt DateTime? @default(now())\n\n  @@map("customers")\n}\n',
      "inlineSchemaHash": "a8a7f4f7218dce4076b1db8d67cd50824e07b957f46bf2a6536cefcfafcfe0f1",
      "copyEngine": true
    };
    var fs = require("fs");
    config.dirname = __dirname;
    if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "node_modules/.prisma/client",
        ".prisma/client"
      ];
      const alternativePath = alternativePaths.find((altPath) => {
        return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      }) ?? alternativePaths[0];
      config.dirname = path.join(process.cwd(), alternativePath);
      config.isBundled = true;
    }
    config.runtimeDataModel = JSON.parse('{"models":{"Customer":{"dbName":"customers","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty(exports2.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    config.compilerWasm = void 0;
    var { warnEnvConflicts } = require("@prisma/client/runtime/library.js");
    warnEnvConflicts({
      rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient(config);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "node_modules/.prisma/client/query_engine-windows.dll.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
  }
});

// src/server.ts
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));

// src/prisma/index.ts
var import_client = __toESM(require_client());
var prismaClient = new import_client.PrismaClient();
var prisma_default = prismaClient;

// src/services/CreateCustomerService.ts
var CreateCustomerService = class {
  async execute({ name, email }) {
    if (!name || !email) {
      throw new Error("Preencha os campos obrigat\xF3rios");
    }
    const customer = await prisma_default.customer.create({
      data: {
        name,
        email,
        status: true
      }
    });
    return customer;
  }
};

// src/controllers/CreateCustomerController.ts
var CreateCustomerController = class {
  async handle(request, reply) {
    const { name, email } = request.body;
    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({ name, email });
    reply.send(customer);
  }
};

// src/services/ListCustomersService.ts
var ListCustomersService = class {
  async execute() {
    const customers = await prisma_default.customer.findMany();
    return customers;
  }
};

// src/controllers/ListCustomersController.ts
var ListCustomersController = class {
  async handle(request, reply) {
    const listCustomersService = new ListCustomersService();
    const customers = await listCustomersService.execute();
    reply.send(customers);
  }
};

// src/services/DeleteCustomerService.ts
var DeleteCustomerService = class {
  async execute({ id }) {
    if (!id) {
      throw new Error("Solicita\xE7\xE3o inv\xE1lida!");
    }
    const findCustomer = await prisma_default.customer.findFirst({
      where: { id }
    });
    if (!findCustomer) {
      throw new Error("Cliente n\xE3o existe!");
    }
    await prisma_default.customer.delete({
      where: {
        id: findCustomer.id
      }
    });
    return { message: "Cliente deletado com sucesso!" };
  }
};

// src/controllers/DeleteCustomerController.ts
var DeleteCustomerController = class {
  async handle(request, reply) {
    const { id } = request.query;
    const customerService = new DeleteCustomerService();
    const customer = await customerService.execute({ id });
    reply.send(customer);
  }
};

// src/routes.ts
async function routes(fastify, options) {
  fastify.get("/teste", async (request, reply) => {
    return { ok: true };
  });
  fastify.post("/customer", async (request, reply) => {
    return new CreateCustomerController().handle(request, reply);
  });
  fastify.get("/customers", async (request, reply) => {
    return new ListCustomersController().handle(request, reply);
  });
  fastify.delete("/customer", async (request, reply) => {
    return new DeleteCustomerController().handle(request, reply);
  });
}

// src/server.ts
var app = (0, import_fastify.default)({ logger: true });
app.setErrorHandler((error, request, reply) => {
  reply.status(400).send({ error: error.message });
});
var start = async () => {
  await app.register(import_cors.default, {
    origin: "*",
    // or true to allow all
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  });
  await app.register(routes);
  try {
    await app.listen({
      port: process.env.PORT ? Number(process.env.PORT) : 3333
    });
  } catch (err) {
    process.exit(1);
  }
};
start();
