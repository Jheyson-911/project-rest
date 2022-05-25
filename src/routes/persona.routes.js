import { Router } from "express";
const router = Router();
// module.export = router;
import * as personaCtrl from "../controllers/persona.controller";
router.get("/", personaCtrl.getPersona);
router.get("/:id", personaCtrl.getPersonaId);
router.post("/", personaCtrl.crearPersona);
router.put("/:id", personaCtrl.updatePersona);
router.delete("/:id", personaCtrl.deletePersona);

export default router;