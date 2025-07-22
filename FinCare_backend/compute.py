import json
from typing import Dict

# Load config and weights from JSON files
def load_config(path: str) -> Dict:
    with open(path, 'r') as f:
        return json.load(f)

def compute_score(input_data: Dict[str, float], config: Dict, weights: Dict, sector: str, scale: str) -> float:
    sector_config = config[sector]["ranking"][scale]
    sector_weights = weights[sector]

    total_score = 0
    total_weight = 0

    for key, value in input_data.items():
        if key not in sector_config or key not in sector_weights:
            continue

        bands = sector_config[key]
        weight = sector_weights[key]
        score = 0

        for lower, upper, pts in bands:
            if upper is None and value > lower:
                score = pts
                break
            if lower < value <= upper:
                score = pts
                break

        total_score += score * weight
        total_weight += weight

    return round(total_score / total_weight) if total_weight > 0 else 0.0
