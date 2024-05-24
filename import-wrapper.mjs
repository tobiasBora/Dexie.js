// Making the module version consumable via require - to prohibit
// multiple occurrancies of the same module in the same app
// (dual package hazard, https://nodejs.org/api/packages.html#dual-package-hazard)
import _Dexie from "./dist/dexie.js";
const DexieSymbol = Symbol.for("Dexie");
const Dexie = globalThis[DexieSymbol] || (globalThis[DexieSymbol] = _Dexie);
if (_Dexie.semVer !== Dexie.semVer) {
    throw new Error(`Two different versions of Dexie loaded in the same app: ${_Dexie.semVer} and ${Dexie.semVer}`);
}
const { liveQuery, mergeRanges, rangesOverlap, RangeSet, cmp, Entity,
    PropModSymbol, PropModification, replacePrefix, add, remove } = Dexie;
export { liveQuery, mergeRanges, rangesOverlap, RangeSet, cmp, Dexie, Entity,
    PropModSymbol, PropModification, replacePrefix, add, remove };
export default Dexie;
