"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUM4QjtBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXFDLEVBQUUsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0YsTUFBTSxFQUFFO1FBQ2xCRSxPQUFPRixNQUFNLEdBQUcsSUFBSUQsd0RBQVlBO0lBQ2xDLENBQUM7SUFDREMsU0FBU0UsT0FBT0YsTUFBTTtBQUN4QixDQUFDO0FBRUQsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW5kLW1vbmV5Ly4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9wcmlzbWEudHNcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\n\n\nlet userAccount;\nconst options = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            id: \"credentials\",\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                const userCredentials = {\n                    email: credentials.email,\n                    password: credentials.password\n                };\n                const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/login`, {\n                    method: \"POST\",\n                    body: JSON.stringify(userCredentials),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const user = await res.json();\n                if (res.ok && user) {\n                    userAccount = user;\n                    console.log(userAccount);\n                    return user;\n                } else {\n                    return null;\n                }\n            }\n        })\n    ],\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\",\n        maxAge: 24 * 60 * 60\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_SECRET,\n        maxAge: 60 * 60 * 24 * 30,\n        encryption: true\n    },\n    pages: {\n        signIn: \"/login\",\n        signOut: \"/login\",\n        error: \"/login\"\n    },\n    callbacks: {\n        async session (session, user, token) {\n            if (user !== null) {\n                // console.log(\"User Account \", user);\n                session.user = user;\n            }\n            // console.log(session, \"as session user\");\n            return await session;\n        },\n        async jwt ({ token , user  }) {\n            const isSignedIn = user ? true : false;\n            if (isSignedIn) {\n                token.accessToken = user.id.toString() + \"-\" + user.email + \"-\" + user.name;\n            }\n            return await token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUN5QjtBQUNRO0FBQ3RCO0FBRTVDLElBQUlJO0FBQ0osTUFBTUMsVUFBVTtJQUNkQyxXQUFXO1FBQ1RKLHNFQUFtQkEsQ0FBQztZQUNsQkssSUFBSTtZQUNKQyxNQUFNO1lBQ04sTUFBTUMsV0FBVUMsV0FBVyxFQUFFQyxHQUFHLEVBQUU7Z0JBQ2hDLE1BQU1DLGtCQUFrQjtvQkFDdEJDLE9BQU9ILFlBQVlHLEtBQUs7b0JBQ3hCQyxVQUFVSixZQUFZSSxRQUFRO2dCQUNoQztnQkFFQSxNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLENBQUMsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsRUFDeEQ7b0JBQ0VDLFFBQVE7b0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1g7b0JBQ3JCWSxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7Z0JBQ0Y7Z0JBRUYsTUFBTUMsT0FBTyxNQUFNVixJQUFJVyxJQUFJO2dCQUUzQixJQUFJWCxJQUFJWSxFQUFFLElBQUlGLE1BQU07b0JBQ2xCckIsY0FBY3FCO29CQUNkRyxRQUFRQyxHQUFHLENBQUN6QjtvQkFDWixPQUFPcUI7Z0JBQ1QsT0FBTztvQkFDTCxPQUFPLElBQUk7Z0JBQ2IsQ0FBQztZQUNIO1FBQ0Y7S0FDRDtJQUVESyxTQUFTN0Isd0VBQWFBLENBQUNFLG1EQUFNQTtJQUM3QjRCLFFBQVFkLFFBQVFDLEdBQUcsQ0FBQ2MsZUFBZTtJQUNuQ0MsU0FBUztRQUFFQyxVQUFVO1FBQU9DLFFBQVEsS0FBSyxLQUFLO0lBQUc7SUFFakRDLEtBQUs7UUFDSEwsUUFBUWQsUUFBUUMsR0FBRyxDQUFDYyxlQUFlO1FBQ25DRyxRQUFRLEtBQUssS0FBSyxLQUFLO1FBQ3ZCRSxZQUFZLElBQUk7SUFDbEI7SUFFQUMsT0FBTztRQUNMQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsT0FBTztJQUNUO0lBRUFDLFdBQVc7UUFDVCxNQUFNVCxTQUFRQSxPQUFPLEVBQUVSLElBQUksRUFBRWtCLEtBQUssRUFBRTtZQUNsQyxJQUFJbEIsU0FBUyxJQUFJLEVBQUU7Z0JBQ2pCLHNDQUFzQztnQkFDdENRLFFBQVFSLElBQUksR0FBR0E7WUFDakIsQ0FBQztZQUNELDJDQUEyQztZQUMzQyxPQUFPLE1BQU1RO1FBQ2Y7UUFFQSxNQUFNRyxLQUFJLEVBQUVPLE1BQUssRUFBRWxCLEtBQUksRUFBRSxFQUFFO1lBQ3pCLE1BQU1tQixhQUFhbkIsT0FBTyxJQUFJLEdBQUcsS0FBSztZQUV0QyxJQUFJbUIsWUFBWTtnQkFDZEQsTUFBTUUsV0FBVyxHQUNmcEIsS0FBS2xCLEVBQUUsQ0FBQ3VDLFFBQVEsS0FBSyxNQUFNckIsS0FBS1osS0FBSyxHQUFHLE1BQU1ZLEtBQUtqQixJQUFJO1lBQzNELENBQUM7WUFFRCxPQUFPLE1BQU1tQztRQUNmO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlLENBQUNoQyxLQUFLSSxNQUFRZixnREFBUUEsQ0FBQ1csS0FBS0ksS0FBS1YsUUFBTyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VuZC1tb25leS8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcblxubGV0IHVzZXJBY2NvdW50O1xuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBpZDogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgY29uc3QgdXNlckNyZWRlbnRpYWxzID0ge1xuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTkVYVEFVVEhfVVJMfS9hcGkvdXNlci9sb2dpbmAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJDcmVkZW50aWFscyksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgIGlmIChyZXMub2sgJiYgdXNlcikge1xuICAgICAgICAgIHVzZXJBY2NvdW50ID0gdXNlcjtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyQWNjb3VudCk7XG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG5cbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgc2Vzc2lvbjogeyBzdHJhdGVneTogXCJqd3RcIiwgbWF4QWdlOiAyNCAqIDYwICogNjAgfSxcblxuICBqd3Q6IHtcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIGVuY3J5cHRpb246IHRydWUsXG4gIH0sXG5cbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gICAgc2lnbk91dDogXCIvbG9naW5cIixcbiAgICBlcnJvcjogXCIvbG9naW5cIixcbiAgfSxcblxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHNlc3Npb24sIHVzZXIsIHRva2VuKSB7XG4gICAgICBpZiAodXNlciAhPT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlVzZXIgQWNjb3VudCBcIiwgdXNlcik7XG4gICAgICAgIHNlc3Npb24udXNlciA9IHVzZXI7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhzZXNzaW9uLCBcImFzIHNlc3Npb24gdXNlclwiKTtcbiAgICAgIHJldHVybiBhd2FpdCBzZXNzaW9uO1xuICAgIH0sXG5cbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBjb25zdCBpc1NpZ25lZEluID0gdXNlciA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgaWYgKGlzU2lnbmVkSW4pIHtcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPVxuICAgICAgICAgIHVzZXIuaWQudG9TdHJpbmcoKSArIFwiLVwiICsgdXNlci5lbWFpbCArIFwiLVwiICsgdXNlci5uYW1lO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXdhaXQgdG9rZW47XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiUHJpc21hQWRhcHRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJ1c2VyQWNjb3VudCIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsInJlcSIsInVzZXJDcmVkZW50aWFscyIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19ORVhUQVVUSF9VUkwiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ1c2VyIiwianNvbiIsIm9rIiwiY29uc29sZSIsImxvZyIsImFkYXB0ZXIiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJqd3QiLCJlbmNyeXB0aW9uIiwicGFnZXMiLCJzaWduSW4iLCJzaWduT3V0IiwiZXJyb3IiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImlzU2lnbmVkSW4iLCJhY2Nlc3NUb2tlbiIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();