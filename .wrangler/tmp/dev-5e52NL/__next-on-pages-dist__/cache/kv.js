import{CacheAdaptor as t}from"./adaptor.js";export default class s extends t{constructor(e={}){super(e)}async retrieve(e){return await process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE?.get(this.buildCacheKey(e))??null}async update(e,r){await process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE?.put(this.buildCacheKey(e),r)}}
