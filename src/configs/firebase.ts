import production from "./firebase.production.json";
import development from "./firebase.development.json";

const firebaseConfig = process.env.NEXT_PUBLIC_BUILD_TARGET === "production" ? production : development;

export default firebaseConfig;
