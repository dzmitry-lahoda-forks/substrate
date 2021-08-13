initSidebarItems({"enum":[["Call","Contains one variant per dispatchable that can be called by an extrinsic."],["Error","Custom dispatch errors of this pallet."],["Event","The event emitted by this pallet."]],"struct":[["ActiveGilt","Information representing an active gilt."],["ActiveGiltsTotal","Overall information package on the active gilts."],["GenesisConfig","Can be used to configure the genesis state of this pallet."],["GiltBid","A single bid on a gilt, an item of a queue in `Queues`."],["IssuanceInfo","Issuance information returned by `issuance()`."],["Pallet","The pallet implementing the on-chain logic."],["_GeneratedPrefixForStorageActive",""],["_GeneratedPrefixForStorageActiveTotal",""],["_GeneratedPrefixForStorageQueueTotals",""],["_GeneratedPrefixForStorageQueues",""]],"trait":[["Config","Configuration trait of this pallet."]],"type":[["Active","The currently active gilts, indexed according to the order of creation."],["ActiveIndex","An index for a gilt."],["ActiveTotal","Information relating to the gilts currently active."],["Module","Type alias to `Pallet`, to be used by `construct_runtime`."],["QueueTotals","The totals of items and balances within each queue. Saves a lot of storage reads in the case of sparsely packed queues."],["Queues","The queues of bids ready to become gilts. Indexed by duration (in `Period`s)."]]});