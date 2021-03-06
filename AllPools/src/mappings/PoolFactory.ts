import { TraderPoolDeployed } from "../../generated/PoolFactory/PoolFactory";
import { getTraderPool } from "../entities/trader-pool/TraderPool";
import { TraderPool } from "../../generated/templates";

export function onDeployed(event: TraderPoolDeployed): void {
  let pool = getTraderPool(
    event.params.at,
    event.params.poolType,
    event.params.basicToken,
    event.params.symbol,
    event.params.name,
    event.params.descriptionURL,
    event.block.timestamp,
    event.block.number,
    event.params.trader,
    event.params.commission
  );
  pool.save();

  TraderPool.create(event.params.at);
}
