from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict
from compute import compute_score, load_config

app = FastAPI()

CONFIG = load_config("config.json")
WEIGHTS = load_config("weights.json")

class ScoreInput(BaseModel):
    sector: str
    scale: str
    indicators: Dict[str, float]

@app.post("/score")
def score_credit(input: ScoreInput):
    try:
        score = compute_score(
            input.indicators,
            CONFIG,
            WEIGHTS,
            sector=input.sector,
            scale=input.scale
        )
        return {"credit_score": score}
    except KeyError as e:
        raise HTTPException(status_code=400, detail=f"Invalid key: {str(e)}")
