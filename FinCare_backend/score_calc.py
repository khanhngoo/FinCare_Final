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

# Example usage
if __name__ == "__main__":
    config = load_config("config.json")
    weights = load_config("weights.json")

    example_input = {
        "current_ratio": 1.1,
        "quick_ratio": 0.6,
        "cash_ratio": 0.2,
        "wc_turn": 4.2,
        "inv_turn": 9.0,
        "recv_turn": 8.0,
        "fa_util": 5.5,
        "debt_assets": 58,
        "ltdebt_equity": 48,
        "gross_margin": 25,
        "ebit_interest": 2.8,
        "roe": 14,
        "roa": 6.5,
        "net_margin": 9.5
    }

    score = compute_score(example_input, config, weights, sector="food_bev_feed", scale="medium")
    print("Tín dụng score:", score)
