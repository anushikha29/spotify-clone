import { Router } from "express";

const router = Router();

router.get("/", (req,res) => {
    res.send('Admin Route with get method')
});

export default router