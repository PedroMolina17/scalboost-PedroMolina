'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactQueryClientProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_query_1 = require("@tanstack/react-query");
const queryClient = new react_query_1.QueryClient();
const ReactQueryClientProvider = ({ children, }) => {
    return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, { client: queryClient, children: children }));
};
exports.ReactQueryClientProvider = ReactQueryClientProvider;
//# sourceMappingURL=ReactQueryClientProvider.js.map