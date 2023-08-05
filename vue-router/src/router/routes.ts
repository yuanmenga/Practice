import Hello from "../components/Hello.vue";
import World from "../components/World.vue";
const routes = [
  { path: "/", name: "Hello", component: Hello },
  {
    path: "/hello",
    name: "hello",
    component: Hello,
    children: [{ path: "world", name: "world", component: World }],
  },
];
export default routes;
