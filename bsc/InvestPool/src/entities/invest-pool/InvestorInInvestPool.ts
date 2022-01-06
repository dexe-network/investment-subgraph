import { Address, BigInt } from "@graphprotocol/graph-ts";
import { InvestorInInvestPool } from "../../../generated/schema";

export function getInvestorInInvestPool(id: Address, investPool: Address = Address.zero()): InvestorInInvestPool {
  let investor = InvestorInInvestPool.load(id.toString());

  if (investor == null) {
    investor = new InvestorInInvestPool(id.toString());
    investor.insurance = BigInt.zero();
    investor.activePools = new Array();
    investor.allPools = new Array();
  }
  
  return investor;
}
