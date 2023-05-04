!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s.register("hTBva",(function(t,n){var r,i,o;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e})),e(t.exports,"SourceMapConsumer",(function(){return i}),(function(e){return i=e})),e(t.exports,"SourceNode",(function(){return o}),(function(e){return o=e})),r=s("8JAU7").SourceMapGenerator,i=s("4SEMF").SourceMapConsumer,o=s("fLrsR").SourceNode})),s.register("8JAU7",(function(t,n){var r;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e}));var i=s("1d7dz"),o=s("cUiFn"),a=s("ccQ4s").ArraySet,c=s("66k9l").MappingList;function u(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new a,this._names=new a,this._mappings=new c,this._sourcesContents=null}u.prototype._version=3,u.fromSourceMap=function(e){var t=e.sourceRoot,n=new u({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(r){var i=r;null!==t&&(i=o.relative(t,r)),n._sources.has(i)||n._sources.add(i);var s=e.sourceContentFor(r);null!=s&&n.setSourceContent(r,s)})),n},u.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},u.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},u.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=o.relative(i,r));var s=new a,c=new a;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var a=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=a.source&&(t.source=a.source,null!=n&&(t.source=o.join(n,t.source)),null!=i&&(t.source=o.relative(i,t.source)),t.originalLine=a.line,t.originalColumn=a.column,null!=a.name&&(t.name=a.name))}var u=t.source;null==u||s.has(u)||s.add(u);var l=t.name;null==l||c.has(l)||c.add(l)}),this),this._sources=s,this._names=c,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=i&&(t=o.relative(i,t)),this.setSourceContent(t,r))}),this)},u.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},u.prototype._serializeMappings=function(){for(var e,t,n,r,s=0,a=1,c=0,u=0,l=0,h=0,d="",p=this._mappings.toArray(),f=0,m=p.length;f<m;f++){if(e="",(t=p[f]).generatedLine!==a)for(s=0;t.generatedLine!==a;)e+=";",a++;else if(f>0){if(!o.compareByGeneratedPositionsInflated(t,p[f-1]))continue;e+=","}e+=i.encode(t.generatedColumn-s),s=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=i.encode(r-h),h=r,e+=i.encode(t.originalLine-1-u),u=t.originalLine-1,e+=i.encode(t.originalColumn-c),c=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=i.encode(n-l),l=n)),d+=e}return d},u.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},u.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},u.prototype.toString=function(){return JSON.stringify(this.toJSON())},r=u})),s.register("1d7dz",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var o=s("ahpWO");r=function(e){var t,n="",r=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&r,(r>>>=5)>0&&(t|=32),n+=o.encode(t)}while(r>0);return n},i=function(e,t,n){var r,i,s,a,c=e.length,u=0,l=0;do{if(t>=c)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=o.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&i),u+=(i&=31)<<l,l+=5}while(r);n.value=(a=(s=u)>>1,1==(1&s)?-a:a),n.rest=t}})),s.register("ahpWO",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");r=function(e){if(0<=e&&e<s.length)return s[e];throw new TypeError("Must be between 0 and 63: "+e)},i=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}})),s.register("cUiFn",(function(t,n){var r,i,s,o,a,c,u,l,h,d,p,f,m;e(t.exports,"getArg",(function(){return r}),(function(e){return r=e})),e(t.exports,"urlParse",(function(){return i}),(function(e){return i=e})),e(t.exports,"isAbsolute",(function(){return a}),(function(e){return a=e})),e(t.exports,"normalize",(function(){return s}),(function(e){return s=e})),e(t.exports,"join",(function(){return o}),(function(e){return o=e})),e(t.exports,"relative",(function(){return c}),(function(e){return c=e})),e(t.exports,"toSetString",(function(){return u}),(function(e){return u=e})),e(t.exports,"fromSetString",(function(){return l}),(function(e){return l=e})),e(t.exports,"compareByOriginalPositions",(function(){return h}),(function(e){return h=e})),e(t.exports,"compareByGeneratedPositionsDeflated",(function(){return d}),(function(e){return d=e})),e(t.exports,"compareByGeneratedPositionsInflated",(function(){return p}),(function(e){return p=e})),e(t.exports,"parseSourceMapInput",(function(){return f}),(function(e){return f=e})),e(t.exports,"computeSourceURL",(function(){return m}),(function(e){return m=e})),r=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var g=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,y=/^data:.+\,.+$/;function v(e){var t=e.match(g);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function w(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function _(e){var t=e,n=v(e);if(n){if(!n.path)return e;t=n.path}for(var r,i=a(t),s=t.split(/\/+/),o=0,c=s.length-1;c>=0;c--)"."===(r=s[c])?s.splice(c,1):".."===r?o++:o>0&&(""===r?(s.splice(c+1,o),o=0):(s.splice(c,2),o--));return""===(t=s.join("/"))&&(t=i?"/":"."),n?(n.path=t,w(n)):t}function b(e,t){""===e&&(e="."),""===t&&(t=".");var n=v(t),r=v(e);if(r&&(e=r.path||"/"),n&&!n.scheme)return r&&(n.scheme=r.scheme),w(n);if(n||t.match(y))return t;if(r&&!r.host&&!r.path)return r.host=t,w(r);var i="/"===t.charAt(0)?t:_(e.replace(/\/+$/,"")+"/"+t);return r?(r.path=i,w(r)):i}i=v,s=_,o=b,a=function(e){return"/"===e.charAt(0)||g.test(e)},c=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var E=!("__proto__"in Object.create(null));function S(e){return e}function k(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function I(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}u=E?S:function(e){return k(e)?"$"+e:e},l=E?S:function(e){return k(e)?e.slice(1):e},h=function(e,t,n){var r=I(e.source,t.source);return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:I(e.name,t.name)},d=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=I(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:I(e.name,t.name)},p=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=I(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:I(e.name,t.name)},f=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},m=function(e,t,n){if(t=t||"",e&&("/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/"),t=e+t),n){var r=v(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var i=r.path.lastIndexOf("/");i>=0&&(r.path=r.path.substring(0,i+1))}t=b(w(r),t)}return _(t)}})),s.register("ccQ4s",(function(t,n){var r;e(t.exports,"ArraySet",(function(){return r}),(function(e){return r=e}));var i=s("cUiFn"),o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Map;function c(){this._array=[],this._set=a?new Map:Object.create(null)}c.fromArray=function(e,t){for(var n=new c,r=0,i=e.length;r<i;r++)n.add(e[r],t);return n},c.prototype.size=function(){return a?this._set.size:Object.getOwnPropertyNames(this._set).length},c.prototype.add=function(e,t){var n=a?e:i.toSetString(e),r=a?this.has(e):o.call(this._set,n),s=this._array.length;r&&!t||this._array.push(e),r||(a?this._set.set(e,s):this._set[n]=s)},c.prototype.has=function(e){if(a)return this._set.has(e);var t=i.toSetString(e);return o.call(this._set,t)},c.prototype.indexOf=function(e){if(a){var t=this._set.get(e);if(t>=0)return t}else{var n=i.toSetString(e);if(o.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},c.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},c.prototype.toArray=function(){return this._array.slice()},r=c})),s.register("66k9l",(function(t,n){var r;e(t.exports,"MappingList",(function(){return r}),(function(e){return r=e}));var i=s("cUiFn");function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},o.prototype.add=function(e){var t,n,r,s,o,a;t=this._last,n=e,r=t.generatedLine,s=n.generatedLine,o=t.generatedColumn,a=n.generatedColumn,s>r||s==r&&a>=o||i.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(i.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},r=o})),s.register("4SEMF",(function(t,n){var r;e(t.exports,"SourceMapConsumer",(function(){return r}),(function(e){return r=e}));var i=s("cUiFn"),o=s("k488Y"),a=s("ccQ4s").ArraySet,c=s("1d7dz"),u=s("hkFn3").quickSort;function l(e,t){var n=e;return"string"==typeof e&&(n=i.parseSourceMapInput(e)),null!=n.sections?new p(n,t):new h(n,t)}function h(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),s=i.getArg(n,"sources"),o=i.getArg(n,"names",[]),c=i.getArg(n,"sourceRoot",null),u=i.getArg(n,"sourcesContent",null),l=i.getArg(n,"mappings"),h=i.getArg(n,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);c&&(c=i.normalize(c)),s=s.map(String).map(i.normalize).map((function(e){return c&&i.isAbsolute(c)&&i.isAbsolute(e)?i.relative(c,e):e})),this._names=a.fromArray(o.map(String),!0),this._sources=a.fromArray(s,!0),this._absoluteSources=this._sources.toArray().map((function(e){return i.computeSourceURL(c,e,t)})),this.sourceRoot=c,this.sourcesContent=u,this._mappings=l,this._sourceMapURL=t,this.file=h}function d(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function p(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),s=i.getArg(n,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new a,this._names=new a;var o={line:-1,column:0};this._sections=s.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var n=i.getArg(e,"offset"),r=i.getArg(n,"line"),s=i.getArg(n,"column");if(r<o.line||r===o.line&&s<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=n,{generatedOffset:{generatedLine:r+1,generatedColumn:s+1},consumer:new l(i.getArg(e,"map"),t)}}))}l.fromSourceMap=function(e,t){return h.fromSourceMap(e,t)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,n){var r,s=t||null;switch(n||l.GENERATED_ORDER){case l.GENERATED_ORDER:r=this._generatedMappings;break;case l.ORIGINAL_ORDER:r=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var o=this.sourceRoot;r.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return{source:t=i.computeSourceURL(o,t,this._sourceMapURL),generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,s)},l.prototype.allGeneratedPositionsFor=function(e){var t=i.getArg(e,"line"),n={source:i.getArg(e,"source"),originalLine:t,originalColumn:i.getArg(e,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var r=[],s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(void 0===e.column)for(var c=a.originalLine;a&&a.originalLine===c;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var u=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==u;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return r},r=l,h.prototype=Object.create(l.prototype),h.prototype.consumer=l,h.prototype._findSourceIndex=function(e){var t,n=e;if(null!=this.sourceRoot&&(n=i.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);for(t=0;t<this._absoluteSources.length;++t)if(this._absoluteSources[t]==e)return t;return-1},h.fromSourceMap=function(e,t){var n=Object.create(h.prototype),r=n._names=a.fromArray(e._names.toArray(),!0),s=n._sources=a.fromArray(e._sources.toArray(),!0);n.sourceRoot=e._sourceRoot,n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=e._file,n._sourceMapURL=t,n._absoluteSources=n._sources.toArray().map((function(e){return i.computeSourceURL(n.sourceRoot,e,t)}));for(var o=e._mappings.toArray().slice(),c=n.__generatedMappings=[],l=n.__originalMappings=[],p=0,f=o.length;p<f;p++){var m=o[p],g=new d;g.generatedLine=m.generatedLine,g.generatedColumn=m.generatedColumn,m.source&&(g.source=s.indexOf(m.source),g.originalLine=m.originalLine,g.originalColumn=m.originalColumn,m.name&&(g.name=r.indexOf(m.name)),l.push(g)),c.push(g)}return u(n.__originalMappings,i.compareByOriginalPositions),n},h.prototype._version=3,Object.defineProperty(h.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),h.prototype._parseMappings=function(e,t){for(var n,r,s,o,a,l=1,h=0,p=0,f=0,m=0,g=0,y=e.length,v=0,w={},_={},b=[],E=[];v<y;)if(";"===e.charAt(v))l++,v++,h=0;else if(","===e.charAt(v))v++;else{for((n=new d).generatedLine=l,o=v;o<y&&!this._charIsMappingSeparator(e,o);o++);if(s=w[r=e.slice(v,o)])v+=r.length;else{for(s=[];v<o;)c.decode(e,v,_),a=_.value,v=_.rest,s.push(a);if(2===s.length)throw new Error("Found a source, but no line and column");if(3===s.length)throw new Error("Found a source and line, but no column");w[r]=s}n.generatedColumn=h+s[0],h=n.generatedColumn,s.length>1&&(n.source=m+s[1],m+=s[1],n.originalLine=p+s[2],p=n.originalLine,n.originalLine+=1,n.originalColumn=f+s[3],f=n.originalColumn,s.length>4&&(n.name=g+s[4],g+=s[4])),E.push(n),"number"==typeof n.originalLine&&b.push(n)}u(E,i.compareByGeneratedPositionsDeflated),this.__generatedMappings=E,u(b,i.compareByOriginalPositions),this.__originalMappings=b},h.prototype._findMapping=function(e,t,n,r,i,s){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return o.search(e,t,i,s)},h.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},h.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",i.compareByGeneratedPositionsDeflated,i.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(n>=0){var r=this._generatedMappings[n];if(r.generatedLine===t.generatedLine){var s=i.getArg(r,"source",null);null!==s&&(s=this._sources.at(s),s=i.computeSourceURL(this.sourceRoot,s,this._sourceMapURL));var o=i.getArg(r,"name",null);return null!==o&&(o=this._names.at(o)),{source:s,line:i.getArg(r,"originalLine",null),column:i.getArg(r,"originalColumn",null),name:o}}}return{source:null,line:null,column:null,name:null}},h.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},h.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;var n=this._findSourceIndex(e);if(n>=0)return this.sourcesContent[n];var r,s=e;if(null!=this.sourceRoot&&(s=i.relative(this.sourceRoot,s)),null!=this.sourceRoot&&(r=i.urlParse(this.sourceRoot))){var o=s.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!r.path||"/"==r.path)&&this._sources.has("/"+s))return this.sourcesContent[this._sources.indexOf("/"+s)]}if(t)return null;throw new Error('"'+s+'" is not in the SourceMap.')},h.prototype.generatedPositionFor=function(e){var t=i.getArg(e,"source");if((t=this._findSourceIndex(t))<0)return{line:null,column:null,lastColumn:null};var n={source:t,originalLine:i.getArg(e,"line"),originalColumn:i.getArg(e,"column")},r=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,i.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(r>=0){var s=this._originalMappings[r];if(s.source===n.source)return{line:i.getArg(s,"generatedLine",null),column:i.getArg(s,"generatedColumn",null),lastColumn:i.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},p.prototype=Object.create(l.prototype),p.prototype.constructor=l,p.prototype._version=3,Object.defineProperty(p.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),p.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=o.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),r=this._sections[n];return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},p.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},p.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},p.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer._findSourceIndex(i.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},p.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],s=r.consumer._generatedMappings,o=0;o<s.length;o++){var a=s[o],c=r.consumer._sources.at(a.source);c=i.computeSourceURL(r.consumer.sourceRoot,c,this._sourceMapURL),this._sources.add(c),c=this._sources.indexOf(c);var l=null;a.name&&(l=r.consumer._names.at(a.name),this._names.add(l),l=this._names.indexOf(l));var h={source:c,generatedLine:a.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:a.generatedColumn+(r.generatedOffset.generatedLine===a.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:a.originalLine,originalColumn:a.originalColumn,name:l};this.__generatedMappings.push(h),"number"==typeof h.originalLine&&this.__originalMappings.push(h)}u(this.__generatedMappings,i.compareByGeneratedPositionsDeflated),u(this.__originalMappings,i.compareByOriginalPositions)}})),s.register("k488Y",(function(t,n){var r,i,s;function o(e,t,n,r,s,a){var c=Math.floor((t-e)/2)+e,u=s(n,r[c],!0);return 0===u?c:u>0?t-c>1?o(c,t,n,r,s,a):a==i?t<r.length?t:-1:c:c-e>1?o(e,c,n,r,s,a):a==i?c:e<0?-1:e}e(t.exports,"GREATEST_LOWER_BOUND",(function(){return r}),(function(e){return r=e})),e(t.exports,"LEAST_UPPER_BOUND",(function(){return i}),(function(e){return i=e})),e(t.exports,"search",(function(){return s}),(function(e){return s=e})),r=1,i=2,s=function(e,t,n,i){if(0===t.length)return-1;var s=o(-1,t.length,e,t,n,i||r);if(s<0)return-1;for(;s-1>=0&&0===n(t[s],t[s-1],!0);)--s;return s}})),s.register("hkFn3",(function(t,n){var r;function i(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function s(e,t,n,r){if(n<r){var o=n-1;i(e,(l=n,h=r,Math.round(l+Math.random()*(h-l))),r);for(var a=e[r],c=n;c<r;c++)t(e[c],a)<=0&&i(e,o+=1,c);i(e,o+1,c);var u=o+1;s(e,t,n,u-1),s(e,t,u+1,r)}var l,h}e(t.exports,"quickSort",(function(){return r}),(function(e){return r=e})),r=function(e,t){s(e,t,0,e.length-1)}})),s.register("fLrsR",(function(t,n){var r;e(t.exports,"SourceNode",(function(){return r}),(function(e){return r=e}));var i=s("8JAU7").SourceMapGenerator,o=s("cUiFn"),a=/(\r?\n)/;function c(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==i?null:i,this.$$$isSourceNode$$$=!0,null!=r&&this.add(r)}c.fromStringWithSourceMap=function(e,t,n){var r=new c,i=e.split(a),s=0,u=function(){return e()+(e()||"");function e(){return s<i.length?i[s++]:void 0}},l=1,h=0,d=null;return t.eachMapping((function(e){if(null!==d){if(!(l<e.generatedLine)){var t=(n=i[s]||"").substr(0,e.generatedColumn-h);return i[s]=n.substr(e.generatedColumn-h),h=e.generatedColumn,p(d,t),void(d=e)}p(d,u()),l++,h=0}for(;l<e.generatedLine;)r.add(u()),l++;if(h<e.generatedColumn){var n=i[s]||"";r.add(n.substr(0,e.generatedColumn)),i[s]=n.substr(e.generatedColumn),h=e.generatedColumn}d=e}),this),s<i.length&&(d&&p(d,u()),r.add(i.splice(s).join(""))),t.sources.forEach((function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=o.join(n,e)),r.setSourceContent(e,i))})),r;function p(e,t){if(null===e||void 0===e.source)r.add(t);else{var i=n?o.join(n,e.source):e.source;r.add(new c(e.originalLine,e.originalColumn,i,t,e.name))}}},c.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},c.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},c.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n]).$$$isSourceNode$$$?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},c.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},c.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n.$$$isSourceNode$$$?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},c.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},c.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t].$$$isSourceNode$$$&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},c.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},c.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new i(e),r=!1,s=null,o=null,a=null,c=null;return this.walk((function(e,i){t.code+=e,null!==i.source&&null!==i.line&&null!==i.column?(s===i.source&&o===i.line&&a===i.column&&c===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name}),s=i.source,o=i.line,a=i.column,c=i.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),s=null,r=!1);for(var u=0,l=e.length;u<l;u++)10===e.charCodeAt(u)?(t.line++,t.column=0,u+1===l?(s=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},r=c})),s.register("1wVs5",(function(e,t){}));var o,a,c,u=o={};function l(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function d(e){if(a===setTimeout)return setTimeout(e,0);if((a===l||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:l}catch(e){a=l}try{c="function"==typeof clearTimeout?clearTimeout:h}catch(e){c=h}}();var p,f=[],m=!1,g=-1;function y(){m&&p&&(m=!1,p.length?f=p.concat(f):g=-1,f.length&&v())}function v(){if(!m){var e=d(y);m=!0;for(var t=f.length;t;){for(p=f,f=[];++g<t;)p&&p[g].run();g=-1,t=f.length}p=null,m=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===h||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function w(e,t){this.fun=e,this.array=t}function _(){}u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new w(e,t)),1!==f.length||m||d(v)},w.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=_,u.addListener=_,u.once=_,u.off=_,u.removeListener=_,u.removeAllListeners=_,u.emit=_,u.prependListener=_,u.prependOnceListener=_,u.listeners=function(e){return[]},u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(b(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new S;const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k=function(e){return function(e){const t=b(e);return E.encodeByteArray(t,!0)}(e).replace(/\./g,"")},I=function(e){try{return E.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,C=()=>{try{return T()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&I(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},A=e=>{var t,n;return null===(n=null===(t=C())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},L=e=>{const t=A(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},N=e=>{var t;return null===(t=C())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[k(JSON.stringify({alg:"none",type:"JWT"})),k(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function R(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function M(){const e=D();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){try{return"object"==typeof indexedDB}catch(e){return!1}}class U extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(V,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new U(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(q(n)&&q(s)){if(!j(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function q(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function z(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function G(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){const n=new W(e,t);return n.subscribe.bind(n)}class W{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Q),void 0===r.error&&(r.error=Q),void 0===r.complete&&(r.complete=Q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}class Y{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new P;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:X})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===X?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:X:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ee{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Z(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=[];var ne,re;(re=ne||(ne={}))[re.DEBUG=0]="DEBUG",re[re.VERBOSE=1]="VERBOSE",re[re.INFO=2]="INFO",re[re.WARN=3]="WARN",re[re.ERROR=4]="ERROR",re[re.SILENT=5]="SILENT";const ie={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},se=ne.INFO,oe={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},ae=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=oe[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ce{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ie[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}constructor(e){this.name=e,this._logLevel=se,this._logHandler=ae,this._userLogHandler=null,te.push(this)}}let ue,le;const he=new WeakMap,de=new WeakMap,pe=new WeakMap,fe=new WeakMap,me=new WeakMap;let ge={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return de.get(e);if("objectStoreNames"===t)return e.objectStoreNames||pe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return we(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ye(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(le||(le=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(_e(this),t),we(he.get(this))}:function(...t){return we(e.apply(_e(this),t))}:function(t,...n){const r=e.call(_e(this),t,...n);return pe.set(r,t.sort?t.sort():[t]),we(r)}}function ve(e){return"function"==typeof e?ye(e):(e instanceof IDBTransaction&&function(e){if(de.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));de.set(e,t)}(e),t=e,(ue||(ue=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ge):e);var t}function we(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(we(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&he.set(t,e)})).catch((()=>{})),me.set(t,e),t}(e);if(fe.has(e))return fe.get(e);const t=ve(e);return t!==e&&(fe.set(e,t),me.set(t,e)),t}const _e=e=>me.get(e);function be(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=we(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(we(o.result),e.oldVersion,e.newVersion,we(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Ee=["get","getKey","getAll","getAllKeys","count"],Se=["put","add","delete","clear"],ke=new Map;function Ie(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ke.get(t))return ke.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Se.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ee.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return ke.set(t,s),s}ge=(e=>({...e,get:(t,n,r)=>Ie(t,n)||e.get(t,n,r),has:(t,n)=>!!Ie(t,n)||e.has(t,n)}))(ge);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ce="@firebase/app",Ae="0.9.7",Le=new ce("@firebase/app"),Ne="[DEFAULT]",Pe={[Ce]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Oe=new Map,De=new Map;function Re(e,t){try{e.container.addComponent(t)}catch(n){Le.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Me(e){const t=e.name;if(De.has(t))return Le.debug(`There were multiple attempts to register component ${t}.`),!1;De.set(t,e);for(const t of Oe.values())Re(t,e);return!0}function xe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ue=new F("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Y("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="9.19.1";function Be(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Ne,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Ue.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=C())||void 0===s?void 0:s.config),!n)throw Ue.create("no-options");const o=Oe.get(i);if(o){if(j(n,o.options)&&j(r,o.config))return o;throw Ue.create("duplicate-app",{appName:i})}const a=new ee(i);for(const e of De.values())a.addComponent(e);const c=new Fe(n,r,a);return Oe.set(i,c),c}function je(e="[DEFAULT]"){const t=Oe.get(e);if(!t&&e===Ne)return Be();if(!t)throw Ue.create("no-app",{appName:e});return t}function $e(e,t,n){var r;let i=null!==(r=Pe[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Le.warn(e.join(" "))}Me(new Y(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qe="firebase-heartbeat-store";let He=null;function ze(){return He||(He=be("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(qe)}}).catch((e=>{throw Ue.create("idb-open",{originalErrorMessage:e.message})}))),He}async function Ge(e,t){try{const n=(await ze()).transaction(qe,"readwrite"),r=n.objectStore(qe);return await r.put(t,Ke(e)),n.done}catch(e){if(e instanceof U)Le.warn(e.message);else{const t=Ue.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Le.warn(t.message)}}}function Ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Qe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Qe(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ye(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ye(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=k(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Je(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Qe(){return(new Date).toISOString().substring(0,10)}class Je{async runIndexedDBEnvironmentCheck(){return!!x()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ze()).transaction(qe).objectStore(qe).get(Ke(e))}catch(e){if(e instanceof U)Le.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Le.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ge(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ge(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Ye(e){return k(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;Xe="",Me(new Y("platform-logger",(e=>new Te(e)),"PRIVATE")),Me(new Y("heartbeat",(e=>new We(e)),"PRIVATE")),$e(Ce,Ae,Xe),$e(Ce,Ae,"esm2017"),$e("fire-js","");function Ze(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function et(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tt=et,nt=new F("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),rt=new ce("@firebase/auth");function it(e,...t){rt.logLevel<=ne.ERROR&&rt.error(`Auth (9.19.1): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e,...t){throw ut(e,...t)}function ot(e,...t){return ut(e,...t)}function at(e,t,n){const r=Object.assign(Object.assign({},tt()),{[t]:n});return new F("auth","Firebase",r).create(t,{appName:e.name})}function ct(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&st(e,"argument-error"),at(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ut(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return nt.create(e,...t)}function lt(e,t,...n){if(!e)throw ut(t,...n)}function ht(e){const t="INTERNAL ASSERTION FAILED: "+e;throw it(t),new Error(t)}function dt(e,t){e||ht(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new Map;function ft(e){dt(e instanceof Function,"Expected a class definition");let t=pt.get(e);return t?(dt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,pt.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function gt(){return"http:"===yt()||"https:"===yt()}function yt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(gt()||R()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{get(){return vt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,dt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,t){dt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},St=new wt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function It(e,t,n,r,i={}){return Tt(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=H(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),bt.fetch()(At(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Tt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Et),t);try{const t=new Lt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Nt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Nt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Nt(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Nt(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw at(e,a,o);st(e,a)}}catch(t){if(t instanceof U)throw t;st(e,"network-request-failed",{message:String(t)})}}async function Ct(e,t,n,r,i={}){const s=await It(e,t,n,r,i);return"mfaPendingCredential"in s&&st(e,"multi-factor-auth-required",{_serverResponse:s}),s}function At(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?_t(e.config,i):`${e.config.apiScheme}://${i}`}class Lt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ot(this.auth,"network-request-failed"))),St.get())}))}}function Nt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ot(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return 1e3*Number(e)}function Dt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return it("JWT malformed, contained fewer than 3 sections"),null;try{const e=I(n);return e?JSON.parse(e):(it("Failed to decode base64 JWT payload"),null)}catch(e){return it("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof U&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Mt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{_initializeTime(){this.lastSignInTime=Pt(this.lastLoginAt),this.creationTime=Pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Rt(e,async function(e,t){return It(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));lt(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ze(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){lt(e.idToken,"internal-error"),lt(void 0!==e.idToken,"internal-error"),lt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Dt(e);return lt(t,"internal-error"),lt(void 0!==t.exp,"internal-error"),lt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return lt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Tt(e,{},(async()=>{const n=H({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=At(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",bt.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Ft;return n&&(lt("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(lt("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(lt("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ft,this.toJSON())}_performRefresh(){return ht("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,t){lt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Bt{async getIdToken(e){const t=await Rt(this,this.stsTokenManager.getToken(this.auth,e));return lt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=J(e),r=await n.getIdToken(t),i=Dt(r);lt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pt(Ot(i.auth_time)),issuedAtTime:Pt(Ot(i.iat)),expirationTime:Pt(Ot(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=J(e);await Ut(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(lt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){lt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ut(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rt(this,async function(e,t){return It(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:E}=t;lt(v&&E,e,"internal-error");const S=Ft.fromJSON(this.name,E);lt("string"==typeof v,e,"internal-error"),Vt(l,e.name),Vt(h,e.name),lt("boolean"==typeof w,e,"internal-error"),lt("boolean"==typeof _,e,"internal-error"),Vt(d,e.name),Vt(p,e.name),Vt(f,e.name),Vt(m,e.name),Vt(g,e.name),Vt(y,e.name);const k=new Bt({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(k.providerData=b.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ft;r.updateFromServerResponse(t);const i=new Bt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Ut(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Ze(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xt(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}jt.type="NONE";const $t=jt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t,n){return`firebase:${e}:${t}:${n}`}class Ht{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ht(ft($t),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ft($t);const s=qt(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Bt._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Ht(i,e,n)):new Ht(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=qt(this.userKey,r.apiKey,i),this.fullPersistenceKey=qt("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Qt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Gt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Yt(t))return"Blackberry";if(Xt(t))return"Webos";if(Kt(t))return"Safari";if((t.includes("chrome/")||Wt(t))&&!t.includes("edge/"))return"Chrome";if(Jt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Gt(e=D()){return/firefox\//i.test(e)}function Kt(e=D()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wt(e=D()){return/crios\//i.test(e)}function Qt(e=D()){return/iemobile/i.test(e)}function Jt(e=D()){return/android/i.test(e)}function Yt(e=D()){return/blackberry/i.test(e)}function Xt(e=D()){return/webos/i.test(e)}function Zt(e=D()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function en(){return M()&&10===document.documentMode}function tn(e=D()){return Zt(e)||Jt(e)||Xt(e)||Yt(e)||/windows phone/i.test(e)||Qt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e,t=[]){let n;switch(e){case"Browser":n=zt(D());break;case"Worker":n=`${zt(D())}-${e}`;break;default:n=e}return`${n}/JsCore/9.19.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ft(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ht.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return lt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ut(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?J(e):null;return t&&lt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&lt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ft(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new F("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ft(e)||this._popupRedirectResolver;lt(t,this,"argument-error"),this.redirectPersistenceManager=await Ht.create(this,[ft(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return lt(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return lt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new an(this),this.idTokenSubscription=new an(this),this.beforeStateQueue=new rn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function on(e){return J(e)}class an{get next(){return lt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=K((e=>this.observer=e))}}function cn(e,t,n){const r=on(e);lt(r._canInitEmulator,r,"emulator-config-failed"),lt(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=un(t),{host:o,port:a}=function(e){const t=un(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ln(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ln(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function un(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ln(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class hn{toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(e,t){return It(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pn extends hn{static _fromEmailAndPassword(e,t){return new pn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new pn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ct(e,"POST","/v1/accounts:signInWithPassword",kt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ct(e,"POST","/v1/accounts:signInWithEmailLink",kt(e,t))}(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return dn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ct(e,"POST","/v1/accounts:signInWithEmailLink",kt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e,t){return Ct(e,"POST","/v1/accounts:signInWithIdp",kt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends hn{static _fromParams(e){const t=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Ze(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new mn(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return fn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,fn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=H(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends hn{static _fromVerification(e,t){return new yn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new yn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ct(e,"POST","/v1/accounts:signInWithPhoneNumber",kt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ct(e,"POST","/v1/accounts:signInWithPhoneNumber",kt(e,t));if(n.temporaryProof)throw Nt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ct(e,"POST","/v1/accounts:signInWithPhoneNumber",kt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),gn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new yn({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{static parseLink(e){const t=function(e){const t=z(G(e)).link,n=t?z(G(t)).deep_link_id:null,r=z(G(e)).deep_link_id;return(r?z(G(r)).link:null)||r||n||t||e}(e);try{return new vn(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=z(G(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);lt(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{static credential(e,t){return pn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vn.parseLink(t);return lt(n,"argument-error"),pn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=wn.PROVIDER_ID}}wn.PROVIDER_ID="password",wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends _n{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class En extends bn{static credential(e){return mn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com",En.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn extends bn{static credential(e,t){return mn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Sn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Sn.GOOGLE_SIGN_IN_METHOD="google.com",Sn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn extends bn{static credential(e){return mn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}kn.GITHUB_SIGN_IN_METHOD="github.com",kn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In extends bn{static credential(e,t){return mn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return In.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tn(e,t){return Ct(e,"POST","/v1/accounts:signUp",kt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.TWITTER_SIGN_IN_METHOD="twitter.com",In.PROVIDER_ID="twitter.com";class Cn{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Bt._fromIdTokenResponse(e,n,r),s=An(n);return new Cn({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=An(n);return new Cn({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function An(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln extends U{static _fromErrorAndOperation(e,t,n,r){return new Ln(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ln.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Nn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ln._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e,t,n=!1){const r=await Rt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Cn._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function On(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Rt(e,Nn(r,i,t,e),n);lt(s.idToken,r,"internal-error");const o=Dt(s.idToken);lt(o,r,"internal-error");const{sub:a}=o;return lt(e.uid===a,r,"user-mismatch"),Cn._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&st(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(e,t,n=!1){const r="signIn",i=await Nn(e,r,t),s=await Cn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Rn(e,t){return Dn(on(e),t)}async function Mn(e,t,n){const r=on(e),i=await Tn(r,{returnSecureToken:!0,email:t,password:n}),s=await Cn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function xn(e,t,n){return Rn(J(e),wn.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e){return J(e).signOut()}new WeakMap;const Fn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{_isAvailable(){try{return this.storage?(this.storage.setItem(Fn,"1"),this.storage.removeItem(Fn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Vn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);en()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=D();return Kt(e)||Zt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=tn(),this._shouldAllowMigration=!0}}Bn.type="LOCAL";const jn=Bn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Vn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}$n.type="SESSION";const qn=$n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Hn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn.receivers=[];class Gn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=zn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wn(){return void 0!==Kn().WorkerGlobalScope&&"function"==typeof Kn().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qn="firebaseLocalStorageDb",Jn="firebaseLocalStorage",Yn="fbase_key";class Xn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Zn(e,t){return e.transaction([Jn],t?"readwrite":"readonly").objectStore(Jn)}function er(){const e=indexedDB.open(Qn,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Jn,{keyPath:Yn})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Jn)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Qn);return new Xn(e).toPromise()}(),t(await er()))}))}))}async function tr(e,t,n){const r=Zn(e,!0).put({[Yn]:t,value:n});return new Xn(r).toPromise()}function nr(e,t){const n=Zn(e,!0).delete(t);return new Xn(n).toPromise()}class rr{async _openDb(){return this.db||(this.db=await er()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hn._getInstance(Wn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Gn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await er();return await tr(e,Fn,"1"),await nr(e,Fn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>tr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Zn(e,!1).get(t),r=await new Xn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>nr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Zn(e,!1).getAll();return new Xn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}rr.type="LOCAL";const ir=rr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ot("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function or(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
or("rcb"),new wt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ar="recaptcha";async function cr(e,t,n){var r;const i=await n.verify();try{let s;if(lt("string"==typeof i,e,"argument-error"),lt(n.type===ar,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){lt("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return It(e,"POST","/v2/accounts/mfaEnrollment:start",kt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{lt("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;lt(n,e,"missing-multi-factor-info");const o=await function(e,t){return It(e,"POST","/v2/accounts/mfaSignIn:start",kt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return It(e,"POST","/v1/accounts:sendVerificationCode",kt(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{verifyPhoneNumber(e,t){return cr(this.auth,e,J(t))}static credential(e,t){return yn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ur.credentialFromTaggedObject(t)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?yn._fromTokenResponse(t,n):null}constructor(e){this.providerId=ur.PROVIDER_ID,this.auth=on(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lr(e,t){return t?ft(t):(lt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ur.PROVIDER_ID="phone",ur.PHONE_SIGN_IN_METHOD="phone";class hr extends hn{_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function dr(e){return Dn(e.auth,new hr(e),e.bypassAuthState)}function pr(e){const{auth:t,user:n}=e;return lt(n,t,"internal-error"),On(n,new hr(e),e.bypassAuthState)}async function fr(e){const{auth:t,user:n}=e;return lt(n,t,"internal-error"),Pn(n,new hr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dr;case"linkViaPopup":case"linkViaRedirect":return fr;case"reauthViaPopup":case"reauthViaRedirect":return pr;default:st(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new wt(2e3,1e4);async function yr(e,t,n){const r=on(e);ct(e,t,_n);const i=lr(r,n);return new vr(r,"signInViaPopup",t,i).executeNotNull()}class vr extends mr{async executeNotNull(){const e=await this.execute();return lt(e,this.auth,"internal-error"),e}async onExecution(){dt(1===this.filter.length,"Popup operations only handle one event");const e=zn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ot(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,gr.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}}vr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wr=new Map;class _r extends mr{async execute(){let e=wr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=kr(t),r=Sr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}wr.set(this.auth._key(),e)}return this.bypassAuthState||wr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function br(e,t){return Sr(e)._set(kr(t),"true")}function Er(e,t){wr.set(e._key(),t)}function Sr(e){return ft(e._redirectPersistence)}function kr(e){return qt("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e,t,n){return async function(e,t,n){const r=on(e);ct(e,t,_n),await r._initializationPromise;const i=lr(r,n);return await br(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}async function Tr(e,t){return await on(e)._initializationPromise,Cr(e,t,!1)}async function Cr(e,t,n=!1){const r=on(e),i=lr(r,t),s=new _r(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ar{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Nr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lr(e))}saveEventToCache(e){this.cachedEventUids.add(Lr(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Lr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Nr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Or=/^https?/;async function Dr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return It(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Rr(e))return}catch(e){}st(e,"unauthorized-domain")}function Rr(e){const t=mt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Or.test(n))return!1;if(Pr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new wt(3e4,6e4);function xr(){const e=Kn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ur=null;function Fr(e){return Ur=Ur||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){xr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xr(),n(ot(e,"network-request-failed"))},timeout:Mr.get()})}if(null===(i=null===(r=Kn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Kn().gapi)||void 0===s?void 0:s.load)){const t=or("iframefcb");return Kn()[t]=()=>{gapi.load?o():n(ot(e,"network-request-failed"))},sr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ur=null,e}))}(e),Ur}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new wt(5e3,15e3),Br={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $r(e){const t=e.config;lt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_t(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Ve},i=jr.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${H(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Hr{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function zr(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},qr),{width:r.toString(),height:i.toString(),top:s,left:o}),u=D().toLowerCase();n&&(a=Wt(u)?"_blank":n),Gt(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=D()){var t;return Zt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Hr(null);const h=window.open(t||"",a,l);lt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Hr(h)}const Gr="emulator/auth/handler";function Kr(e,t,n,r,i,s){lt(e.config.authDomain,e,"auth-domain-config-required"),lt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ve,eventId:i};if(t instanceof _n){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",B(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof bn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?_t(e,Gr):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${H(a).slice(1)}`}const Wr="webStorageSupport";const Qr=class{async _openPopup(e,t,n,r){var i;dt(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return zr(e,Kr(e,t,n,mt(),r),zn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Kr(e,t,n,mt(),r),Kn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(dt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Fr(e),n=Kn().gapi;return lt(n,e,"internal-error"),t.open({where:document.body,url:$r(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Br,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ot(e,"network-request-failed"),s=Kn().setTimeout((()=>{r(i)}),Vr.get());function o(){Kn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Ar(e);return t.register("authEvent",(t=>{lt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wr,{type:Wr},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),st(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tn()||Kt()||Zt()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qn,this._completeRedirectFn=Cr,this._overrideRedirectResult=Er}};var Jr="@firebase/auth",Yr="0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){lt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zr=N("authIdTokenMaxAge")||300;let ei=null;var ti;ti="Browser",Me(new Y("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{lt(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),lt(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:ti,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nn(ti)},o=new sn(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Me(new Y("auth-internal",(e=>{const t=on(e.getProvider("auth").getImmediate());return new Xr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),$e(Jr,Yr,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ti)),$e(Jr,Yr,"esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$e("firebase","9.19.1","app");var ni,ri="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},ii={},si=si||{},oi=ri||self;function ai(){}function ci(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function ui(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var li="closure_uid_"+(1e9*Math.random()>>>0),hi=0;function di(e,t,n){return e.call.apply(e.bind,arguments)}function pi(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function fi(e,t,n){return(fi=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?di:pi).apply(null,arguments)}function mi(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function gi(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function yi(){this.s=this.s,this.o=this.o}yi.prototype.s=!1,yi.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,li)&&e[li]||(e[li]=++hi))},yi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function wi(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function _i(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(ci(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function bi(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}bi.prototype.h=function(){this.defaultPrevented=!0};var Ei=function(){if(!oi.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{oi.addEventListener("test",ai,t),oi.removeEventListener("test",ai,t)}catch(e){}return e}();function Si(e){return/^[\s\xa0]*$/.test(e)}var ki=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ii(e,t){return e<t?-1:e>t?1:0}function Ti(){var e=oi.navigator;return e&&(e=e.userAgent)?e:""}function Ci(e){return-1!=Ti().indexOf(e)}function Ai(e){return Ai[" "](e),e}Ai[" "]=ai;var Li,Ni,Pi=Ci("Opera"),Oi=Ci("Trident")||Ci("MSIE"),Di=Ci("Edge"),Ri=Di||Oi,Mi=Ci("Gecko")&&!(-1!=Ti().toLowerCase().indexOf("webkit")&&!Ci("Edge"))&&!(Ci("Trident")||Ci("MSIE"))&&!Ci("Edge"),xi=-1!=Ti().toLowerCase().indexOf("webkit")&&!Ci("Edge");function Ui(){var e=oi.document;return e?e.documentMode:void 0}e:{var Fi="",Vi=(Ni=Ti(),Mi?/rv:([^\);]+)(\)|;)/.exec(Ni):Di?/Edge\/([\d\.]+)/.exec(Ni):Oi?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ni):xi?/WebKit\/(\S+)/.exec(Ni):Pi?/(?:Version)[ \/]?(\S+)/.exec(Ni):void 0);if(Vi&&(Fi=Vi?Vi[1]:""),Oi){var Bi=Ui();if(null!=Bi&&Bi>parseFloat(Fi)){Li=String(Bi);break e}}Li=Fi}var ji,$i={};function qi(){return function(e){var t=$i;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=ki(String(Li)).split("."),n=ki("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Ii(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Ii(0==i[2].length,0==s[2].length)||Ii(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(oi.document&&Oi){var Hi=Ui();ji=Hi||(parseInt(Li,10)||void 0)}else ji=void 0;var zi=ji;function Gi(e,t){if(bi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Mi){e:{try{Ai(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ki[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Gi.X.h.call(this)}}gi(Gi,bi);var Ki={2:"touch",3:"pen",4:"mouse"};Gi.prototype.h=function(){Gi.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Wi="closure_listenable_"+(1e6*Math.random()|0),Qi=0;function Ji(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Qi,this.ba=this.ea=!1}function Yi(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Xi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Zi(e){const t={};for(const n in e)t[n]=e[n];return t}const es="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ts(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<es.length;t++)n=es[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ns(e){this.src=e,this.g={},this.h=0}function rs(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=vi(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Yi(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function is(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}ns.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=is(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new Ji(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var ss="closure_lm_"+(1e6*Math.random()|0),os={};function as(e,t,n,r,i){if(r&&r.once)return us(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)as(e,t[s],n,r,i);return null}return n=gs(n),e&&e[Wi]?e.N(t,n,ui(r)?!!r.capture:!!r,i):cs(e,t,n,!1,r,i)}function cs(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ui(i)?!!i.capture:!!i,a=fs(e);if(a||(e[ss]=a=new ns(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=ps;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Ei||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ds(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function us(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)us(e,t[s],n,r,i);return null}return n=gs(n),e&&e[Wi]?e.O(t,n,ui(r)?!!r.capture:!!r,i):cs(e,t,n,!0,r,i)}function ls(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ls(e,t[s],n,r,i);else r=ui(r)?!!r.capture:!!r,n=gs(n),e&&e[Wi]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=is(s=e.g[t],n,r,i))&&(Yi(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=fs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=is(t,n,r,i)),(n=-1<e?t[e]:null)&&hs(n))}function hs(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Wi])rs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ds(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=fs(t))?(rs(n,e),0==n.h&&(n.src=null,t[ss]=null)):Yi(e)}}}function ds(e){return e in os?os[e]:os[e]="on"+e}function ps(e,t){if(e.ba)e=!0;else{t=new Gi(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&hs(e),e=n.call(r,t)}return e}function fs(e){return(e=e[ss])instanceof ns?e:null}var ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function gs(e){return"function"==typeof e?e:(e[ms]||(e[ms]=function(t){return e.handleEvent(t)}),e[ms])}function ys(){yi.call(this),this.i=new ns(this),this.P=this,this.I=null}function vs(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new bi(t,e);else if(t instanceof bi)t.target=t.target||e;else{var i=t;ts(t=new bi(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ws(o,r,!0,t)&&i}if(i=ws(o=t.g=e,r,!0,t)&&i,i=ws(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ws(o=t.g=n[s],r,!1,t)&&i}function ws(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&rs(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}gi(ys,yi),ys.prototype[Wi]=!0,ys.prototype.removeEventListener=function(e,t,n,r){ls(this,e,t,n,r)},ys.prototype.M=function(){if(ys.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Yi(n[r]);delete t.g[e],t.h--}}this.I=null},ys.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ys.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var _s=oi.JSON.stringify;function bs(){var e=As;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Es,Ss=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new ks),(e=>e.reset()));class ks{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Is(e){oi.setTimeout((()=>{throw e}),0)}function Ts(e,t){Es||function(){var e=oi.Promise.resolve(void 0);Es=function(){e.then(Ls)}}(),Cs||(Es(),Cs=!0),As.add(e,t)}var Cs=!1,As=new class{add(e,t){const n=Ss.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Ls(){for(var e;e=bs();){try{e.h.call(e.g)}catch(e){Is(e)}var t=Ss;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Cs=!1}function Ns(e,t){ys.call(this),this.h=e||1,this.g=t||oi,this.j=fi(this.lb,this),this.l=Date.now()}function Ps(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Os(e,t,n){if("function"==typeof e)n&&(e=fi(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=fi(e.handleEvent,e)}return 2147483647<Number(t)?-1:oi.setTimeout(e,t||0)}function Ds(e){e.g=Os((()=>{e.g=null,e.i&&(e.i=!1,Ds(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}gi(Ns,ys),(ni=Ns.prototype).ca=!1,ni.R=null,ni.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),vs(this,"tick"),this.ca&&(Ps(this),this.start()))}},ni.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ni.M=function(){Ns.X.M.call(this),Ps(this),delete this.g};class Rs extends yi{l(e){this.h=arguments,this.g?this.i=!0:Ds(this)}M(){super.M(),this.g&&(oi.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Ms(e){yi.call(this),this.h=e,this.g={}}gi(Ms,yi);var xs=[];function Us(e,t,n,r){Array.isArray(n)||(n&&(xs[0]=n.toString()),n=xs);for(var i=0;i<n.length;i++){var s=as(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Fs(e){Xi(e.g,(function(e,t){this.g.hasOwnProperty(t)&&hs(e)}),e),e.g={}}function Vs(){this.g=!0}function Bs(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return _s(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Ms.prototype.M=function(){Ms.X.M.call(this),Fs(this)},Ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Vs.prototype.Aa=function(){this.g=!1},Vs.prototype.info=function(){};var js={},$s=null;function qs(){return $s=$s||new ys}function Hs(e){bi.call(this,js.Pa,e)}function zs(e){const t=qs();vs(t,new Hs(t))}function Gs(e,t){bi.call(this,js.STAT_EVENT,e),this.stat=t}function Ks(e){const t=qs();vs(t,new Gs(t,e))}function Ws(e,t){bi.call(this,js.Qa,e),this.size=t}function Qs(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return oi.setTimeout((function(){e()}),t)}js.Pa="serverreachability",gi(Hs,bi),js.STAT_EVENT="statevent",gi(Gs,bi),js.Qa="timingevent",gi(Ws,bi);var Js={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ys={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xs(){}function Zs(e){return e.h||(e.h=e.i())}function eo(){}Xs.prototype.h=null;var to,no={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ro(){bi.call(this,"d")}function io(){bi.call(this,"c")}function so(){}function oo(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Ms(this),this.O=co,e=Ri?125:void 0,this.T=new Ns(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ao}function ao(){this.i=null,this.g="",this.h=!1}gi(ro,bi),gi(io,bi),gi(so,Xs),so.prototype.g=function(){return new XMLHttpRequest},so.prototype.i=function(){return{}},to=new so;var co=45e3,uo={},lo={};function ho(e,t,n){e.K=1,e.v=Po(To(t)),e.s=n,e.P=!0,po(e,null)}function po(e,t){e.F=Date.now(),yo(e),e.A=To(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Ho(n.i,"t",r),e.C=0,n=e.l.H,e.h=new ao,e.g=qa(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Rs(fi(e.La,e,e.g),e.N)),Us(e.S,e.g,"readystatechange",e.ib),t=e.H?Zi(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),zs(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function fo(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function mo(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=go(e,n),r==lo){4==t&&(e.o=4,Ks(14),i=!1),Bs(e.j,e.m,null,"[Incomplete Response]");break}if(r==uo){e.o=4,Ks(15),Bs(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Bs(e.j,e.m,r,null),Eo(e,r)}fo(e)&&r!=lo&&r!=uo&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ks(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ma(t),t.K=!0,Ks(11))):(Bs(e.j,e.m,n,"[Invalid Chunked Response]"),bo(e),_o(e))}function go(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?lo:(n=Number(t.substring(n,r)),isNaN(n)?uo:(r+=1)+n>t.length?lo:(t=t.substr(r,n),e.C=r+n,t))}function yo(e){e.V=Date.now()+e.O,vo(e,e.O)}function vo(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Qs(fi(e.gb,e),t)}function wo(e){e.B&&(oi.clearTimeout(e.B),e.B=null)}function _o(e){0==e.l.G||e.I||Fa(e.l,e)}function bo(e){wo(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ps(e.T),Fs(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Eo(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Jo(n.h,e)))if(!e.J&&Jo(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Ua(n),Ca(n)}Ra(n),Ks(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Qs(fi(n.cb,n),6e3));if(1>=Qo(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Ba(n,11)}else if((e.J||n.g==e)&&Ua(n),!Si(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Yo(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,No(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((r=n).sa=$a(r,r.H?r.ka:null,r.V),o.J){Xo(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(wo(a),yo(a)),r.g=o}else Da(r);0<n.i.length&&La(n)}else"stop"!=u[0]&&"close"!=u[0]||Ba(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ba(n,7):Ta(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}zs()}catch(e){}}function So(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ci(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(ci(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(ci(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(ni=oo.prototype).setTimeout=function(e){this.O=e},ni.ib=function(e){e=e.target;const t=this.L;t&&3==_a(e)?t.l():this.La(e)},ni.La=function(e){try{if(e==this.g)e:{const l=_a(this.g);var t=this.g.Ea();this.g.aa();if(!(3>l)&&(3!=l||Ri||this.g&&(this.h.h||this.g.fa()||ba(this.g)))){this.I||4!=l||7==t||zs(),wo(this);var n=this.g.aa();this.Y=n;t:if(fo(this)){var r=ba(this.g);e="";var i=r.length,s=4==_a(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bo(this),_o(this);var o="";break t}this.h.i=new oi.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Si(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Ks(12),bo(this),_o(this);break e}Bs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Eo(this,n)}this.P?(mo(this,l,o),Ri&&this.i&&3==l&&(Us(this.S,this.T,"tick",this.hb),this.T.start())):(Bs(this.j,this.m,o,null),Eo(this,o)),4==l&&bo(this),this.i&&!this.I&&(4==l?Fa(this.l,this):(this.i=!1,yo(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ks(12)):(this.o=0,Ks(13)),bo(this),_o(this)}}}catch(e){}},ni.hb=function(){if(this.g){var e=_a(this.g),t=this.g.fa();this.C<t.length&&(wo(this),mo(this,e,t),this.i&&4!=e&&yo(this))}},ni.cancel=function(){this.I=!0,bo(this)},ni.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(zs(),Ks(17)),bo(this),this.o=2,_o(this)):vo(this,this.V-e)};var ko=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Io(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Io){this.h=void 0!==t?t:e.h,Co(this,e.j),this.s=e.s,this.g=e.g,Ao(this,e.m),this.l=e.l,t=e.i;var n=new Bo;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Lo(this,n),this.o=e.o}else e&&(n=String(e).match(ko))?(this.h=!!t,Co(this,n[1]||"",!0),this.s=Oo(n[2]||""),this.g=Oo(n[3]||"",!0),Ao(this,n[4]),this.l=Oo(n[5]||"",!0),Lo(this,n[6]||"",!0),this.o=Oo(n[7]||"")):(this.h=!!t,this.i=new Bo(null,this.h))}function To(e){return new Io(e)}function Co(e,t,n){e.j=n?Oo(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ao(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Lo(e,t,n){t instanceof Bo?(e.i=t,function(e,t){t&&!e.j&&(jo(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&($o(this,t),Ho(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Do(t,Fo)),e.i=new Bo(t,e.h))}function No(e,t,n){e.i.set(t,n)}function Po(e){return No(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Oo(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Do(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ro),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ro(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Io.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Do(t,Mo,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Do(t,Mo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Do(n,"/"==n.charAt(0)?Uo:xo,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Do(n,Vo)),e.join("")};var Mo=/[#\/\?@]/g,xo=/[#\?:]/g,Uo=/[#\?]/g,Fo=/[#\?@]/g,Vo=/#/g;function Bo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function jo(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function $o(e,t){jo(e),t=zo(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function qo(e,t){return jo(e),t=zo(e,t),e.g.has(t)}function Ho(e,t,n){$o(e,t),0<n.length&&(e.i=null,e.g.set(zo(e,t),wi(n)),e.h+=n.length)}function zo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ni=Bo.prototype).add=function(e,t){jo(this),this.i=null,e=zo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ni.forEach=function(e,t){jo(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},ni.oa=function(){jo(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},ni.W=function(e){jo(this);let t=[];if("string"==typeof e)qo(this,e)&&(t=t.concat(this.g.get(zo(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},ni.set=function(e,t){return jo(this),this.i=null,qo(this,e=zo(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ni.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},ni.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Go(e){this.l=e||Ko,oi.PerformanceNavigationTiming?e=0<(e=oi.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(oi.g&&oi.g.Ga&&oi.g.Ga()&&oi.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ko=10;function Wo(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Qo(e){return e.h?1:e.g?e.g.size:0}function Jo(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Yo(e,t){e.g?e.g.add(t):e.h=t}function Xo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Zo(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return wi(e.i)}function ea(){}function ta(){this.g=new ea}function na(e,t,n){const r=n||"";try{So(e,(function(e,n){let i=e;ui(e)&&(i=_s(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function ra(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function ia(e){this.l=e.ac||null,this.j=e.jb||!1}function sa(e,t){ys.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=oa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Go.prototype.cancel=function(){if(this.i=Zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ea.prototype.stringify=function(e){return oi.JSON.stringify(e,void 0)},ea.prototype.parse=function(e){return oi.JSON.parse(e,void 0)},gi(ia,Xs),ia.prototype.g=function(){return new sa(this.l,this.j)},ia.prototype.i=function(e){return function(){return e}}({}),gi(sa,ys);var oa=0;function aa(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function ca(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ua(e)}function ua(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ni=sa.prototype).open=function(e,t){if(this.readyState!=oa)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ua(this)},ni.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||oi).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},ni.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ca(this)),this.readyState=oa},ni.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ua(this)),this.g&&(this.readyState=3,ua(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==oi.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;aa(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},ni.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ca(this):ua(this),3==this.readyState&&aa(this)}},ni.Va=function(e){this.g&&(this.response=this.responseText=e,ca(this))},ni.Ua=function(e){this.g&&(this.response=e,ca(this))},ni.ga=function(){this.g&&ca(this)},ni.setRequestHeader=function(e,t){this.v.append(e,t)},ni.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ni.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(sa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var la=oi.JSON.parse;function ha(e){ys.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=da,this.K=this.L=!1}gi(ha,ys);var da="",pa=/^https?$/i,fa=["POST","PUT"];function ma(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ga(e),va(e)}function ga(e){e.D||(e.D=!0,vs(e,"complete"),vs(e,"error"))}function ya(e){if(e.h&&void 0!==si&&(!e.C[1]||4!=_a(e)||2!=e.aa()))if(e.v&&4==_a(e))Os(e.Ha,0,e);else if(vs(e,"readystatechange"),4==_a(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(ko)[1]||null;if(!i&&oi.self&&oi.self.location){var s=oi.self.location.protocol;i=s.substr(0,s.length-1)}r=!pa.test(i?i.toLowerCase():"")}n=r}if(n)vs(e,"complete"),vs(e,"success");else{e.m=6;try{var o=2<_a(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",ga(e)}}finally{va(e)}}}function va(e,t){if(e.g){wa(e);const n=e.g,r=e.C[0]?ai:null;e.g=null,e.C=null,t||vs(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function wa(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(oi.clearTimeout(e.A),e.A=null)}function _a(e){return e.g?e.g.readyState:0}function ba(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case da:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ea(e){let t="";return Xi(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Sa(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ea(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):No(e,t,n))}function ka(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ia(e){this.Ca=0,this.i=[],this.j=new Vs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ka("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ka("baseRetryDelayMs",5e3,e),this.bb=ka("retryDelaySeedMs",1e4,e),this.$a=ka("forwardChannelMaxRetries",2,e),this.ta=ka("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Go(e&&e.concurrentRequestLimit),this.Fa=new ta,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Ta(e){if(Aa(e),3==e.G){var t=e.U++,n=To(e.F);No(n,"SID",e.I),No(n,"RID",t),No(n,"TYPE","terminate"),Pa(e,n),(t=new oo(e,e.j,t,void 0)).K=2,t.v=Po(To(n)),n=!1,oi.navigator&&oi.navigator.sendBeacon&&(n=oi.navigator.sendBeacon(t.v.toString(),"")),!n&&oi.Image&&((new Image).src=t.v,n=!0),n||(t.g=qa(t.l,null),t.g.da(t.v)),t.F=Date.now(),yo(t)}ja(e)}function Ca(e){e.g&&(Ma(e),e.g.cancel(),e.g=null)}function Aa(e){Ca(e),e.u&&(oi.clearTimeout(e.u),e.u=null),Ua(e),e.h.cancel(),e.m&&("number"==typeof e.m&&oi.clearTimeout(e.m),e.m=null)}function La(e){Wo(e.h)||e.m||(e.m=!0,Ts(e.Ja,e),e.C=0)}function Na(e,t){var n;n=t?t.m:e.U++;const r=To(e.F);No(r,"SID",e.I),No(r,"RID",n),No(r,"AID",e.T),Pa(e,r),e.o&&e.s&&Sa(r,e.o,e.s),n=new oo(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Oa(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Yo(e.h,n),ho(n,r,t)}function Pa(e,t){e.ia&&Xi(e.ia,(function(e,n){No(t,n,e)})),e.l&&So({},(function(e,n){No(t,n,e)}))}function Oa(e,t,n){n=Math.min(e.i.length,n);var r=e.l?fi(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{na(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Da(e){e.g||e.u||(e.Z=1,Ts(e.Ia,e),e.A=0)}function Ra(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Qs(fi(e.Ia,e),Va(e,e.A)),e.A++,!0)}function Ma(e){null!=e.B&&(oi.clearTimeout(e.B),e.B=null)}function xa(e){e.g=new oo(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=To(e.sa);No(t,"RID","rpc"),No(t,"SID",e.I),No(t,"CI",e.L?"0":"1"),No(t,"AID",e.T),No(t,"TYPE","xmlhttp"),Pa(e,t),e.o&&e.s&&Sa(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Po(To(t)),n.s=null,n.P=!0,po(n,e)}function Ua(e){null!=e.v&&(oi.clearTimeout(e.v),e.v=null)}function Fa(e,t){var n=null;if(e.g==t){Ua(e),Ma(e),e.g=null;var r=2}else{if(!Jo(e.h,t))return;n=t.D,Xo(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;vs(r=qs(),new Ws(r,n)),La(e)}else Da(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(Qo(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Qs(fi(e.Ja,e,t),Va(e,e.C)),e.C++,0)))}(e,t)||2==r&&Ra(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Ba(e,5);break;case 4:Ba(e,10);break;case 3:Ba(e,6);break;default:Ba(e,2)}}function Va(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ba(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=fi(e.kb,e);n||(n=new Io("//www.google.com/images/cleardot.gif"),oi.location&&"http"==oi.location.protocol||Co(n,"https"),Po(n)),function(e,t){const n=new Vs;if(oi.Image){const r=new Image;r.onload=mi(ra,n,r,"TestLoadImage: loaded",!0,t),r.onerror=mi(ra,n,r,"TestLoadImage: error",!1,t),r.onabort=mi(ra,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=mi(ra,n,r,"TestLoadImage: timeout",!1,t),oi.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Ks(2);e.G=0,e.l&&e.l.va(t),ja(e),Aa(e)}function ja(e){if(e.G=0,e.la=[],e.l){const t=Zo(e.h);0==t.length&&0==e.i.length||(_i(e.la,t),_i(e.la,e.i),e.h.i.length=0,wi(e.i),e.i.length=0),e.l.ua()}}function $a(e,t,n){var r=n instanceof Io?To(n):new Io(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Ao(r,r.m);else{var i=oi.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Io(null,void 0);r&&Co(s,r),t&&(s.g=t),i&&Ao(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&No(r,n,t),No(r,"VER",e.ma),Pa(e,r),r}function qa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new ha(new ia({jb:!0})):new ha(e.ra)).Ka(e.H),t}function Ha(){}function za(){if(Oi&&!(10<=Number(zi)))throw Error("Environmental error: no available transport.")}function Ga(e,t){ys.call(this),this.g=new Ia(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Si(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Si(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Qa(this)}function Ka(e){ro.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Wa(){io.call(this),this.status=1}function Qa(e){this.g=e}(ni=ha.prototype).Ka=function(e){this.L=e},ni.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():to.g(),this.C=this.u?Zs(this.u):Zs(to),this.g.onreadystatechange=fi(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void ma(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=oi.FormData&&e instanceof oi.FormData,!(0<=vi(fa,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{wa(this),0<this.B&&((this.K=function(e){return Oi&&qi()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=fi(this.qa,this)):this.A=Os(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ma(this,e)}},ni.qa=function(){void 0!==si&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vs(this,"timeout"),this.abort(8))},ni.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,vs(this,"complete"),vs(this,"abort"),va(this))},ni.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),va(this,!0)),ha.X.M.call(this)},ni.Ha=function(){this.s||(this.F||this.v||this.l?ya(this):this.fb())},ni.fb=function(){ya(this)},ni.aa=function(){try{return 2<_a(this)?this.g.status:-1}catch(e){return-1}},ni.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},ni.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),la(t)}},ni.Ea=function(){return this.m},ni.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ni=Ia.prototype).ma=8,ni.G=1,ni.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new oo(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=Zi(s),ts(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Oa(this,i,t),No(n=To(this.F),"RID",e),No(n,"CVER",22),this.D&&No(n,"X-HTTP-Session-Id",this.D),Pa(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(Ea(s)))+"&"+t:this.o&&Sa(n,this.o,s)),Yo(this.h,i),this.Ya&&No(n,"TYPE","init"),this.O?(No(n,"$req",t),No(n,"SID","null"),i.Z=!0,ho(i,n,null)):ho(i,n,t),this.G=2}}else 3==this.G&&(e?Na(this,e):0==this.i.length||Wo(this.h)||Na(this))},ni.Ia=function(){if(this.u=null,xa(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Qs(fi(this.eb,this),e)}},ni.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ks(10),Ca(this),xa(this))},ni.cb=function(){null!=this.v&&(this.v=null,Ca(this),Ra(this),Ks(19))},ni.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Ks(2)):(this.j.info("Failed to ping google.com"),Ks(1))},(ni=Ha.prototype).xa=function(){},ni.wa=function(){},ni.va=function(){},ni.ua=function(){},ni.Ra=function(){},za.prototype.g=function(e,t){return new Ga(e,t)},gi(Ga,ys),Ga.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Ks(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=$a(e,null,e.V),La(e)},Ga.prototype.close=function(){Ta(this.g)},Ga.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=_s(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&La(t)},Ga.prototype.M=function(){this.g.l=null,delete this.j,Ta(this.g),delete this.g,Ga.X.M.call(this)},gi(Ka,ro),gi(Wa,io),gi(Qa,Ha),Qa.prototype.xa=function(){vs(this.g,"a")},Qa.prototype.wa=function(e){vs(this.g,new Ka(e))},Qa.prototype.va=function(e){vs(this.g,new Wa)},Qa.prototype.ua=function(){vs(this.g,"b")},za.prototype.createWebChannel=za.prototype.g,Ga.prototype.send=Ga.prototype.u,Ga.prototype.open=Ga.prototype.m,Ga.prototype.close=Ga.prototype.close,Js.NO_ERROR=0,Js.TIMEOUT=8,Js.HTTP_ERROR=6,Ys.COMPLETE="complete",eo.EventType=no,no.OPEN="a",no.CLOSE="b",no.ERROR="c",no.MESSAGE="d",ys.prototype.listen=ys.prototype.N,ha.prototype.listenOnce=ha.prototype.O,ha.prototype.getLastError=ha.prototype.Oa,ha.prototype.getLastErrorCode=ha.prototype.Ea,ha.prototype.getStatus=ha.prototype.aa,ha.prototype.getResponseJson=ha.prototype.Sa,ha.prototype.getResponseText=ha.prototype.fa,ha.prototype.send=ha.prototype.da,ha.prototype.setWithCredentials=ha.prototype.Ka;var Ja=ii.createWebChannelTransport=function(){return new za},Ya=ii.getStatEventTarget=function(){return qs()},Xa=ii.ErrorCode=Js,Za=ii.EventType=Ys,ec=ii.Event=js,tc=ii.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nc=ii.FetchXmlHttpFactory=ia,rc=ii.WebChannel=eo,ic=ii.XhrIo=ha;const sc="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}oc.UNAUTHENTICATED=new oc(null),oc.GOOGLE_CREDENTIALS=new oc("google-credentials-uid"),oc.FIRST_PARTY=new oc("first-party-uid"),oc.MOCK_USER=new oc("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ac="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new ce("@firebase/firestore");function uc(){return cc.logLevel}function lc(e,...t){if(cc.logLevel<=ne.DEBUG){const n=t.map(pc);cc.debug(`Firestore (${ac}): ${e}`,...n)}}function hc(e,...t){if(cc.logLevel<=ne.ERROR){const n=t.map(pc);cc.error(`Firestore (${ac}): ${e}`,...n)}}function dc(e,...t){if(cc.logLevel<=ne.WARN){const n=t.map(pc);cc.warn(`Firestore (${ac}): ${e}`,...n)}}function pc(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(e="Unexpected state"){const t=`FIRESTORE (${ac}) INTERNAL ASSERTION FAILED: `+e;throw hc(t),new Error(t)}function mc(e,t){e||fc()}function gc(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class vc extends U{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(oc.UNAUTHENTICATED)))}shutdown(){}}class Ec{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class Sc{start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new wc;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wc,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{lc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(lc("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wc)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(lc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(mc("string"==typeof t.accessToken),new _c(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return mc(null===e||"string"==typeof e),new oc(e)}constructor(e){this.t=e,this.currentUser=oc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class kc{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=oc.FIRST_PARTY,this.g=new Map}}class Ic{getToken(){return Promise.resolve(new kc(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(oc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class Tc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cc{start(e,t){const n=e=>{null!=e.error&&lc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,lc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{lc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):lc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(mc("string"==typeof e.token),this.T=e.token,new Tc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ac(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Ac(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Nc(e,t){return e<t?-1:e>t?1:0}function Pc(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc{static now(){return Oc.fromMillis(Date.now())}static fromDate(e){return Oc.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Oc(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Nc(this.nanoseconds,e.nanoseconds):Nc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new vc(yc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new vc(yc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new vc(yc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new vc(yc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{static fromTimestamp(e){return new Dc(e)}static min(){return new Dc(new Oc(0,0))}static max(){return new Dc(new Oc(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{get length(){return this.len}isEqual(e){return 0===Rc.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rc?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&fc(),void 0===n?n=e.length-t:n>e.length-t&&fc(),this.segments=e,this.offset=t,this.len=n}}class Mc extends Rc{construct(e,t,n){return new Mc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new vc(yc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Mc(t)}static emptyPath(){return new Mc([])}}const xc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Uc extends Rc{construct(e,t,n){return new Uc(e,t,n)}static isValidIdentifier(e){return xc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Uc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Uc(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new vc(yc.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new vc(yc.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new vc(yc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new vc(yc.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Uc(t)}static emptyPath(){return new Uc([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{static fromPath(e){return new Fc(Mc.fromString(e))}static fromName(e){return new Fc(Mc.fromString(e).popFirst(5))}static empty(){return new Fc(Mc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Mc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Mc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fc(new Mc(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Vc.UNKNOWN_ID=-1;function Bc(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Dc.fromTimestamp(1e9===r?new Oc(n+1,0):new Oc(n,r));return new $c(i,Fc.empty(),t)}function jc(e){return new $c(e.readTime,e.key,-1)}class $c{static min(){return new $c(Dc.min(),Fc.empty(),-1)}static max(){return new $c(Dc.max(),Fc.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function qc(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Fc.comparator(e.documentKey,t.documentKey),0!==n?n:Nc(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zc{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(e){if(e.code!==yc.FAILED_PRECONDITION||e.message!==Hc)throw e;lc("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Kc(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Kc?t:Kc.resolve(t)}catch(e){return Kc.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Kc.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Kc.reject(t)}static resolve(e){return new Kc(((t,n)=>{t(e)}))}static reject(e){return new Kc(((t,n)=>{n(e)}))}static waitFor(e){return new Kc(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Kc.resolve(!1);for(const n of e)t=t.next((e=>e?Kc.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Kc(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Kc(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qc{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function Jc(e){return null==e}function Yc(e){return 0===e&&1/e==-1/0}function Xc(e){return"number"==typeof e&&Number.isInteger(e)&&!Yc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qc.ct=-1;const Zc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],tu=eu;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ru(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function iu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{insert(e,t){return new su(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,au.BLACK,null,null))}remove(e){return new su(this.comparator,this.root.remove(e,this.comparator).copy(null,null,au.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ou(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ou(this.root,e,this.comparator,!1)}getReverseIterator(){return new ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ou(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||au.EMPTY}}class ou{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class au{copy(e,t,n,r,i){return new au(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return au.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return au.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,au.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,au.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fc();if(this.right.isRed())throw fc();const e=this.left.check();if(e!==this.right.check())throw fc();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:au.RED,this.left=null!=r?r:au.EMPTY,this.right=null!=i?i:au.EMPTY,this.size=this.left.size+1+this.right.size}}au.EMPTY=null,au.RED=!0,au.BLACK=!1,au.EMPTY=new class{get key(){throw fc()}get value(){throw fc()}get color(){throw fc()}get left(){throw fc()}get right(){throw fc()}copy(e,t,n,r,i){return this}insert(e,t,n){return new au(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cu{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uu(this.data.getIterator())}getIteratorFrom(e){return new uu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof cu))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new cu(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new su(this.comparator)}}class uu{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu{static empty(){return new lu([])}unionWith(e){let t=new cu(Uc.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new lu(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pc(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(Uc.comparator)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new hu("Invalid base64 string: "+e):e}}(e);return new pu(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new pu(t)}[du](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Nc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}pu.EMPTY_BYTE_STRING=new pu("");const fu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mu(e){if(mc(!!e),"string"==typeof e){let t=0;const n=fu.exec(e);if(mc(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:gu(e.seconds),nanos:gu(e.nanos)}}function gu(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function yu(e){return"string"==typeof e?pu.fromBase64String(e):pu.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function wu(e){const t=e.mapValue.fields.__previous_value__;return vu(t)?wu(t):t}function _u(e){const t=mu(e.mapValue.fields.__local_write_time__.timestampValue);return new Oc(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Eu{static empty(){return new Eu("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Eu&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ku(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?vu(e)?4:Uu(e)?9007199254740991:10:fc()}function Iu(e,t){if(e===t)return!0;const n=ku(e);if(n!==ku(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _u(e).isEqual(_u(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=mu(e.timestampValue),r=mu(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,yu(e.bytesValue).isEqual(yu(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return gu(e.geoPointValue.latitude)===gu(t.geoPointValue.latitude)&&gu(e.geoPointValue.longitude)===gu(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return gu(e.integerValue)===gu(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=gu(e.doubleValue),r=gu(t.doubleValue);return n===r?Yc(n)===Yc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Pc(e.arrayValue.values||[],t.arrayValue.values||[],Iu);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(nu(n)!==nu(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Iu(n[e],r[e])))return!1;return!0}(e,t);default:return fc()}var r}function Tu(e,t){return void 0!==(e.values||[]).find((e=>Iu(e,t)))}function Cu(e,t){if(e===t)return 0;const n=ku(e),r=ku(t);if(n!==r)return Nc(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Nc(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=gu(e.integerValue||e.doubleValue),r=gu(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Au(e.timestampValue,t.timestampValue);case 4:return Au(_u(e),_u(t));case 5:return Nc(e.stringValue,t.stringValue);case 6:return function(e,t){const n=yu(e),r=yu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Nc(n[e],r[e]);if(0!==t)return t}return Nc(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Nc(gu(e.latitude),gu(t.latitude));return 0!==n?n:Nc(gu(e.longitude),gu(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Cu(n[e],r[e]);if(t)return t}return Nc(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Su.mapValue&&t===Su.mapValue)return 0;if(e===Su.mapValue)return 1;if(t===Su.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Nc(r[e],s[e]);if(0!==t)return t;const o=Cu(n[r[e]],i[s[e]]);if(0!==o)return o}return Nc(r.length,s.length)}(e.mapValue,t.mapValue);default:throw fc()}}function Au(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Nc(e,t);const n=mu(e),r=mu(t),i=Nc(n.seconds,r.seconds);return 0!==i?i:Nc(n.nanos,r.nanos)}function Lu(e){return Nu(e)}function Nu(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=mu(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?yu(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Fc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Nu(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Nu(e.fields[i])}`;return n+"}"}(e.mapValue):fc()}function Pu(e){return!!e&&"integerValue"in e}function Ou(e){return!!e&&"arrayValue"in e}function Du(e){return!!e&&"nullValue"in e}function Ru(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Mu(e){return!!e&&"mapValue"in e}function xu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ru(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=xu(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Uu(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fu{static empty(){return new Fu({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Mu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xu(t)}setAll(e){let t=Uc.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=xu(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Mu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Iu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Mu(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){ru(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Fu(xu(this.value))}constructor(e){this.value=e}}function Vu(e){const t=[];return ru(e.fields,((e,n)=>{const r=new Uc([e]);if(Mu(n)){const e=Vu(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new lu(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Bu{static newInvalidDocument(e){return new Bu(e,0,Dc.min(),Dc.min(),Dc.min(),Fu.empty(),0)}static newFoundDocument(e,t,n,r){return new Bu(e,1,t,Dc.min(),n,r,0)}static newNoDocument(e,t){return new Bu(e,2,t,Dc.min(),Dc.min(),Fu.empty(),0)}static newUnknownDocument(e,t){return new Bu(e,3,t,Dc.min(),Dc.min(),Fu.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Dc.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fu.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Dc.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Bu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.position=e,this.inclusive=t}}function $u(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Fc.comparator(Fc.fromName(o.referenceValue),n.key):Cu(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function qu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Iu(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t="asc"){this.field=e,this.dir=t}}function zu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{}class Ku extends Gu{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tl(e,t,n):"array-contains"===t?new sl(e,n):"in"===t?new ol(e,n):"not-in"===t?new al(e,n):"array-contains-any"===t?new cl(e,n):new Ku(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new nl(e,n):new rl(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Cu(t,this.value)):null!==t&&ku(this.value)===ku(t)&&this.matchesComparison(Cu(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return fc()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class Wu extends Gu{static create(e,t){return new Wu(e,t)}matches(e){return Qu(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}}function Qu(e){return"and"===e.op}function Ju(e){return Yu(e)&&Qu(e)}function Yu(e){for(const t of e.filters)if(t instanceof Wu)return!1;return!0}function Xu(e){if(e instanceof Ku)return e.field.canonicalString()+e.op.toString()+Lu(e.value);if(Ju(e))return e.filters.map((e=>Xu(e))).join(",");{const t=e.filters.map((e=>Xu(e))).join(",");return`${e.op}(${t})`}}function Zu(e,t){return e instanceof Ku?(n=e,(r=t)instanceof Ku&&n.op===r.op&&n.field.isEqual(r.field)&&Iu(n.value,r.value)):e instanceof Wu?function(e,t){return t instanceof Wu&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Zu(n,t.filters[r])),!0)}(e,t):void fc();var n,r}function el(e){return e instanceof Ku?`${(t=e).field.canonicalString()} ${t.op} ${Lu(t.value)}`:e instanceof Wu?function(e){return e.op.toString()+" {"+e.getFilters().map(el).join(" ,")+"}"}(e):"Filter";var t}class tl extends Ku{matches(e){const t=Fc.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=Fc.fromName(n.referenceValue)}}class nl extends Ku{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=il("in",t)}}class rl extends Ku{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=il("not-in",t)}}function il(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Fc.fromName(e.referenceValue)))}class sl extends Ku{matches(e){const t=e.data.field(this.field);return Ou(t)&&Tu(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class ol extends Ku{matches(e){const t=e.data.field(this.field);return null!==t&&Tu(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class al extends Ku{matches(e){if(Tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Tu(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class cl extends Ku{matches(e){const t=e.data.field(this.field);return!(!Ou(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Tu(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function ll(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ul(e,t,n,r,i,s,o)}function hl(e){const t=gc(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Xu(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Jc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Lu(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Lu(e))).join(",")),t.ft=e}return t.ft}function dl(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!zu(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Zu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qu(e.startAt,t.startAt)&&qu(e.endAt,t.endAt)}function pl(e){return Fc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fl{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function ml(e,t,n,r,i,s,o,a){return new fl(e,t,n,r,i,s,o,a)}function gl(e){return new fl(e)}function yl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function vl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function wl(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function _l(e){return null!==e.collectionGroup}function bl(e){const t=gc(e);if(null===t.dt){t.dt=[];const e=wl(t),n=vl(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Hu(e)),t.dt.push(new Hu(Uc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Hu(Uc.keyField(),e))}}}return t.dt}function El(e){const t=gc(e);if(!t.wt)if("F"===t.limitType)t.wt=ll(t.path,t.collectionGroup,bl(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of bl(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Hu(n.field,t))}const n=t.endAt?new ju(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ju(t.startAt.position,t.startAt.inclusive):null;t.wt=ll(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function Sl(e,t,n){return new fl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function kl(e,t){return dl(El(e),El(t))&&e.limitType===t.limitType}function Il(e){return`${hl(El(e))}|lt:${e.limitType}`}function Tl(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>el(e))).join(", ")}]`),Jc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Lu(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Lu(e))).join(",")),`Target(${t})`}(El(e))}; limitType=${e.limitType})`}function Cl(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Fc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of bl(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=$u(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,bl(n),r)||n.endAt&&!function(e,t,n){const r=$u(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,bl(n),r)));var n,r}function Al(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ll(e){return(t,n)=>{let r=!1;for(const i of bl(e)){const e=Nl(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Nl(e,t,n){const r=e.field.isKeyField()?Fc.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Cu(r,i):fc()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return fc()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ru(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return iu(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new su(Fc.comparator);function Dl(){return Ol}const Rl=new su(Fc.comparator);function Ml(...e){let t=Rl;for(const n of e)t=t.insert(n.key,n);return t}function xl(e){let t=Rl;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Ul(){return Vl()}function Fl(){return Vl()}function Vl(){return new Pl((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Bl=new su(Fc.comparator),jl=new cu(Fc.comparator);function $l(...e){let t=jl;for(const n of e)t=t.add(n);return t}const ql=new cu(Nc);function Hl(){return ql}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(t)?"-0":t}}function Gl(e){return{integerValue:""+e}}function Kl(e,t){return Xc(t)?Gl(t):zl(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this._=void 0}}function Ql(e,t,n){return e instanceof Xl?Zl(e,t):e instanceof eh?th(e,t):n}function Jl(e,t){var n,r;return e instanceof nh?Pu(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}class Yl extends Wl{}class Xl extends Wl{constructor(e){super(),this.elements=e}}function Zl(e,t){const n=ih(t);for(const t of e.elements)n.some((e=>Iu(e,t)))||n.push(t);return{arrayValue:{values:n}}}class eh extends Wl{constructor(e){super(),this.elements=e}}function th(e,t){let n=ih(t);for(const t of e.elements)n=n.filter((e=>!Iu(e,t)));return{arrayValue:{values:n}}}class nh extends Wl{constructor(e,t){super(),this.serializer=e,this._t=t}}function rh(e){return gu(e.integerValue||e.doubleValue)}function ih(e){return Ou(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t){this.version=e,this.transformResults=t}}class oh{static none(){return new oh}static exists(e){return new oh(void 0,e)}static updateTime(e){return new oh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function ah(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ch{}function uh(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new wh(e.key,oh.none()):new fh(e.key,e.data,oh.none());{const n=e.data,r=Fu.empty();let i=new cu(Uc.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new mh(e.key,r,new lu(i.toArray()),oh.none())}}function lh(e,t,n){var r;e instanceof fh?function(e,t,n){const r=e.value.clone(),i=yh(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof mh?function(e,t,n){if(!ah(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=yh(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(gh(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function hh(e,t,n,r){return e instanceof fh?function(e,t,n,r){if(!ah(e.precondition,t))return n;const i=e.value.clone(),s=vh(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof mh?function(e,t,n,r){if(!ah(e.precondition,t))return n;const i=vh(e.fieldTransforms,r,t),s=t.data;return s.setAll(gh(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,ah(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function dh(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Jl(r.transform,e||null);null!=i&&(null===n&&(n=Fu.empty()),n.set(r.field,i))}return n||null}function ph(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Pc(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Xl&&r instanceof Xl||n instanceof eh&&r instanceof eh?Pc(n.elements,r.elements,Iu):n instanceof nh&&r instanceof nh?Iu(n._t,r._t):n instanceof Yl&&r instanceof Yl);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}class fh extends ch{getFieldMask(){return null}constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class mh extends ch{getFieldMask(){return this.fieldMask}constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function gh(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function yh(e,t,n){const r=new Map;mc(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ql(o,a,n[i]))}return r}function vh(e,t,n){const r=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=t,(i=e)instanceof Yl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,s):i instanceof Xl?Zl(i,s):i instanceof eh?th(i,s):function(e,t){const n=Jl(e,t),r=rh(n)+rh(e._t);return Pu(n)&&Pu(e._t)?Gl(r):zl(e.serializer,r)}(i,s)))}var i,s,o;return r}class wh extends ch{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class _h extends ch{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&lh(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=hh(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=hh(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Fl();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=uh(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Dc.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),$l())}isEqual(e){return this.batchId===e.batchId&&Pc(this.mutations,e.mutations,((e,t)=>ph(e,t)))&&Pc(this.baseMutations,e.baseMutations,((e,t)=>ph(e,t)))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class Eh{static from(e,t,n){mc(e.mutations.length===n.length);let r=Bl;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Eh(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kh{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ih,Th;function Ch(e){switch(e){default:return fc();case yc.CANCELLED:case yc.UNKNOWN:case yc.DEADLINE_EXCEEDED:case yc.RESOURCE_EXHAUSTED:case yc.INTERNAL:case yc.UNAVAILABLE:case yc.UNAUTHENTICATED:return!1;case yc.INVALID_ARGUMENT:case yc.NOT_FOUND:case yc.ALREADY_EXISTS:case yc.PERMISSION_DENIED:case yc.FAILED_PRECONDITION:case yc.ABORTED:case yc.OUT_OF_RANGE:case yc.UNIMPLEMENTED:case yc.DATA_LOSS:return!0}}function Ah(e){if(void 0===e)return hc("GRPC error has no .code"),yc.UNKNOWN;switch(e){case Ih.OK:return yc.OK;case Ih.CANCELLED:return yc.CANCELLED;case Ih.UNKNOWN:return yc.UNKNOWN;case Ih.DEADLINE_EXCEEDED:return yc.DEADLINE_EXCEEDED;case Ih.RESOURCE_EXHAUSTED:return yc.RESOURCE_EXHAUSTED;case Ih.INTERNAL:return yc.INTERNAL;case Ih.UNAVAILABLE:return yc.UNAVAILABLE;case Ih.UNAUTHENTICATED:return yc.UNAUTHENTICATED;case Ih.INVALID_ARGUMENT:return yc.INVALID_ARGUMENT;case Ih.NOT_FOUND:return yc.NOT_FOUND;case Ih.ALREADY_EXISTS:return yc.ALREADY_EXISTS;case Ih.PERMISSION_DENIED:return yc.PERMISSION_DENIED;case Ih.FAILED_PRECONDITION:return yc.FAILED_PRECONDITION;case Ih.ABORTED:return yc.ABORTED;case Ih.OUT_OF_RANGE:return yc.OUT_OF_RANGE;case Ih.UNIMPLEMENTED:return yc.UNIMPLEMENTED;case Ih.DATA_LOSS:return yc.DATA_LOSS;default:return fc()}}(Th=Ih||(Ih={}))[Th.OK=0]="OK",Th[Th.CANCELLED=1]="CANCELLED",Th[Th.UNKNOWN=2]="UNKNOWN",Th[Th.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Th[Th.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Th[Th.NOT_FOUND=5]="NOT_FOUND",Th[Th.ALREADY_EXISTS=6]="ALREADY_EXISTS",Th[Th.PERMISSION_DENIED=7]="PERMISSION_DENIED",Th[Th.UNAUTHENTICATED=16]="UNAUTHENTICATED",Th[Th.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Th[Th.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Th[Th.ABORTED=10]="ABORTED",Th[Th.OUT_OF_RANGE=11]="OUT_OF_RANGE",Th[Th.UNIMPLEMENTED=12]="UNIMPLEMENTED",Th[Th.INTERNAL=13]="INTERNAL",Th[Th.UNAVAILABLE=14]="UNAVAILABLE",Th[Th.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lh{static get instance(){return Nh}static getOrCreateInstance(){return null===Nh&&(Nh=new Lh),Nh}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let Nh=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Oh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ph(Dc.min(),r,Hl(),Dl(),$l())}constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class Oh{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Oh(n,t,$l(),$l(),$l())}constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Rh{constructor(e,t){this.targetId=e,this.Et=t}}class Mh{constructor(e,t,n=pu.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class xh{get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=$l(),t=$l(),n=$l();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:fc()}})),new Oh(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=Vh()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}constructor(){this.At=0,this.Rt=Vh(),this.vt=pu.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}}class Uh{Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{const n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:fc()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.Wt(n)&&t(n)}))}Jt(e){var t;const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(pl(s))if(0===r){const e=new Fc(s.path);this.Qt(n,e,Bu.newNoDocument(e,Dc.min()))}else mc(1===r);else{const i=this.Zt(n);i!==r&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=Lh.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&pl(i.target)){const t=new Fc(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Bu.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=$l();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Ph(e,t,this.Ut,this.Lt,n);return this.Lt=Dl(),this.qt=Fh(),this.Ut=new cu(Nc),r}Gt(e,t){if(!this.Wt(e))return;const n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new xh,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new cu(Nc),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=null!==this.Yt(e);return t||lc("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new xh),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Dl(),this.qt=Fh(),this.Ut=new cu(Nc)}}function Fh(){return new su(Fc.comparator)}function Vh(){return new su(Fc.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh={asc:"ASCENDING",desc:"DESCENDING"},jh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$h={and:"AND",or:"OR"};class qh{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Gh(e,t){return Hh(e,t.toTimestamp())}function Kh(e){return mc(!!e),Dc.fromTimestamp(function(e){const t=mu(e);return new Oc(t.seconds,t.nanos)}(e))}function Wh(e,t){return(n=e,new Mc(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Qh(e){const t=Mc.fromString(e);return mc(fd(t)),t}function Jh(e,t){return Wh(e.databaseId,t.path)}function Yh(e,t){const n=Qh(t);if(n.get(1)!==e.databaseId.projectId)throw new vc(yc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new vc(yc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Fc(td(n))}function Xh(e,t){return Wh(e.databaseId,t)}function Zh(e){const t=Qh(e);return 4===t.length?Mc.emptyPath():td(t)}function ed(e){return new Mc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function td(e){return mc(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function nd(e,t,n){return{name:Jh(e,t),fields:n.value.mapValue.fields}}function rd(e,t){let n;if(t instanceof fh)n={update:nd(e,t.key,t.value)};else if(t instanceof wh)n={delete:Jh(e,t.key)};else if(t instanceof mh)n={update:nd(e,t.key,t.data),updateMask:pd(t.fieldMask)};else{if(!(t instanceof _h))return fc();n={verify:Jh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Yl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Xl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof eh)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof nh)return{fieldPath:t.field.canonicalString(),increment:n._t};throw fc()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Gh(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:fc())),n;var r,i}function id(e,t){return{documents:[Xh(e,t.path)]}}function sd(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Xh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return dd(Wu.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:ld((t=e).field),direction:cd(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=e,c=t.limit,a.useProto3Json||Jc(c)?c:{value:c});var a,c,u;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function od(e){let t=Zh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){mc(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=ad(e);return t instanceof Wu&&Ju(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Hu(hd((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Jc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ju(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ju(n,t)}(n.endAt)),ml(t,i,o,s,a,"F",c,u)}function ad(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=hd(e.unaryFilter.field);return Ku.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=hd(e.unaryFilter.field);return Ku.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hd(e.unaryFilter.field);return Ku.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=hd(e.unaryFilter.field);return Ku.create(i,"!=",{nullValue:"NULL_VALUE"});default:return fc()}}(e):void 0!==e.fieldFilter?(n=e,Ku.create(hd(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fc()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,Wu.create(t.compositeFilter.filters.map((e=>ad(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return fc()}}(t.compositeFilter.op))):fc();var t,n}function cd(e){return Bh[e]}function ud(e){return jh[e]}function ld(e){return{fieldPath:e.canonicalString()}}function hd(e){return Uc.fromServerFormat(e.fieldPath)}function dd(e){return e instanceof Ku?function(e){if("=="===e.op){if(Ru(e.value))return{unaryFilter:{field:ld(e.field),op:"IS_NAN"}};if(Du(e.value))return{unaryFilter:{field:ld(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ru(e.value))return{unaryFilter:{field:ld(e.field),op:"IS_NOT_NAN"}};if(Du(e.value))return{unaryFilter:{field:ld(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ld(e.field),op:ud(e.op),value:e.value}}}(e):e instanceof Wu?function(e){const t=e.getFilters().map((e=>dd(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,$h[n]),filters:t}};var n}(e):fc()}function pd(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function fd(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{withSequenceNumber(e){return new md(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new md(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new md(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}constructor(e,t,n,r,i=Dc.min(),s=Dc.min(),o=pu.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.se=e}}function yd(e){const t=od({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Sl(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(gu(e.integerValue));else if("doubleValue"in e){const n=gu(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),Yc(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(yu(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?Uu(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):fc()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const e of Object.keys(n))this.fe(e,t),this.ue(n[e],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const e of n)this.ue(e,t)}_e(e,t){this.ae(t,37),Fc.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}constructor(){}}vd.pe=new vd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wd{addToCollectionParentIndex(e,t){return this.He.add(t),Kc.resolve()}getCollectionParents(e,t){return Kc.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return Kc.resolve()}deleteFieldIndex(e,t){return Kc.resolve()}getDocumentsMatchingTarget(e,t){return Kc.resolve(null)}getIndexType(e,t){return Kc.resolve(0)}getFieldIndexes(e,t){return Kc.resolve([])}getNextCollectionGroupToUpdate(e){return Kc.resolve(null)}getMinOffset(e,t){return Kc.resolve($c.min())}getMinOffsetFromCollectionGroup(e,t){return Kc.resolve($c.min())}updateCollectionGroup(e,t,n){return Kc.resolve()}updateIndexEntries(e,t){return Kc.resolve()}constructor(){this.He=new _d}}class _d{add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new cu(Mc.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new cu(Mc.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class bd{static withCacheSize(e){return new bd(e,bd.DEFAULT_COLLECTION_PERCENTILE,bd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bd.DEFAULT_COLLECTION_PERCENTILE=10,bd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bd.DEFAULT=new bd(41943040,bd.DEFAULT_COLLECTION_PERCENTILE,bd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bd.DISABLED=new bd(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ed{next(){return this.Rn+=2,this.Rn}static vn(){return new Ed(0)}static bn(){return new Ed(-1)}constructor(e){this.Rn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sd{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Kc.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new Pl((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&hh(n.mutation,e,lu.empty(),Oc.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,$l()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=$l()){const r=Ul();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ml();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Ul();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,$l())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Dl();const s=Vl(),o=Vl();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof mh)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),hh(o.mutation,t,o.mutation.getFieldMask(),Oc.now())):s.set(t.key,lu.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new kd(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Vl();let r=new su(((e,t)=>e-t)),i=$l();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||lu.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||$l()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Fl();c.forEach((e=>{if(!i.has(e)){const r=uh(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Kc.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return r=t,Fc.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):_l(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Kc.resolve(Ul());let o=-1,a=i;return s.next((t=>Kc.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Kc.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,$l()))).next((e=>({batchId:o,changes:xl(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Fc(t)).next((e=>{let t=Ml();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Ml();return this.indexManager.getCollectionParents(e,r).next((s=>Kc.forEach(s,(s=>{const o=(a=t,c=s.child(r),new fl(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Bu.newInvalidDocument(r)))}));let n=Ml();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&hh(s.mutation,i,lu.empty(),Oc.now()),Cl(t,i)&&(n=n.insert(e,i))})),n}))}constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{getBundleMetadata(e,t){return Kc.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Kh(n.createTime)}),Kc.resolve()}getNamedQuery(e,t){return Kc.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:(n=t).name,query:yd(n.bundledQuery),readTime:Kh(n.readTime)}),Kc.resolve();var n}constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{getOverlay(e,t){return Kc.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ul();return Kc.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.re(e,t,r)})),Kc.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ts.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),Kc.resolve()}getOverlaysForCollection(e,t,n){const r=Ul(),i=t.length+1,s=new Fc(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Kc.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new su(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Ul(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Ul(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Kc.resolve(o)}re(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Sh(t,n));let i=this.ts.get(t);void 0===i&&(i=$l(),this.ts.set(t,i)),this.ts.set(t,i.add(n.key))}constructor(){this.overlays=new su(Fc.comparator),this.ts=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new Ld(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new Ld(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new Fc(new Mc([])),n=new Ld(t,e),r=new Ld(t,e+1),i=[];return this.ss.forEachInRange([n,r],(e=>{this.us(e),i.push(e.key)})),i}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new Fc(new Mc([])),n=new Ld(t,e),r=new Ld(t,e+1);let i=$l();return this.ss.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Ld(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.es=new cu(Ld.ns),this.ss=new cu(Ld.rs)}}class Ld{static ns(e,t){return Fc.comparator(e.key,t.key)||Nc(e.ds,t.ds)}static rs(e,t){return Nc(e.ds,t.ds)||Fc.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.ds=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{checkEmpty(e){return Kc.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new bh(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this._s=this._s.add(new Ld(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Kc.resolve(s)}lookupMutationBatch(e,t){return Kc.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ys(n),i=r<0?0:r;return Kc.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Kc.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Kc.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ld(t,0),r=new Ld(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,r],(e=>{const t=this.gs(e.ds);i.push(t)})),Kc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new cu(Nc);return t.forEach((e=>{const t=new Ld(e,0),r=new Ld(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,r],(e=>{n=n.add(e.ds)}))})),Kc.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Fc.isDocumentKey(i)||(i=i.child(""));const s=new Ld(new Fc(i),0);let o=new cu(Nc);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ds)),!0)}),s),Kc.resolve(this.ps(o))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){mc(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return Kc.forEach(t.mutations,(r=>{const i=new Ld(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new Ld(t,0),r=this._s.firstAfterOrEqual(n);return Kc.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Kc.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new cu(Ld.ns)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Kc.resolve(n?n.document.mutableCopy():Bu.newInvalidDocument(t))}getEntries(e,t){let n=Dl();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Bu.newInvalidDocument(e))})),Kc.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Dl();const s=t.path,o=new Fc(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||qc(jc(o),n)<=0||(r.has(o.key)||Cl(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Kc.resolve(i)}getAllFromCollectionGroup(e,t,n,r){fc()}Es(e,t){return Kc.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Od(this)}getSize(e){return Kc.resolve(this.size)}constructor(e){this.Ts=e,this.docs=new su(Fc.comparator),this.size=0}}class Od extends Sd{applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(n)})),Kc.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}constructor(e){super(),this.Jn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),Kc.resolve()}getLastRemoteSnapshotVersion(e){return Kc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Kc.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),Kc.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),Kc.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Ed(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,Kc.resolve()}updateTargetData(e,t){return this.Sn(t),Kc.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,Kc.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Kc.waitFor(i).next((()=>r))}getTargetCount(e){return Kc.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return Kc.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),Kc.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Kc.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),Kc.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return Kc.resolve(n)}containsKey(e,t){return Kc.resolve(this.vs.containsKey(t))}constructor(e){this.persistence=e,this.As=new Pl((e=>hl(e)),dl),this.lastRemoteSnapshotVersion=Dc.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ad,this.targetCount=0,this.bs=Ed.vn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Cd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new Nd(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){lc("MemoryPersistence","Starting transaction:",e);const r=new Md(this.Vs.next());return this.referenceDelegate.Ns(),n(r).next((e=>this.referenceDelegate.ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Os(e,t){return Kc.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Qc(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Dd(this),this.indexManager=new wd,this.remoteDocumentCache=new Pd((e=>this.referenceDelegate.Cs(e))),this.serializer=new gd(t),this.xs=new Td(this.serializer)}}class Md extends zc{constructor(e){super(),this.currentSequenceNumber=e}}class xd{static Fs(e){return new xd(e)}get Bs(){if(this.Ms)return this.Ms;throw fc()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),Kc.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),Kc.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),Kc.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Kc.forEach(this.Bs,(n=>{const r=Fc.fromPath(n);return this.Ls(e,r).next((e=>{e||t.removeEntry(r,Dc.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return Kc.or([()=>Kc.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}constructor(e){this.persistence=e,this.$s=new Ad,this.Ms=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ud{static Di(e,t){let n=$l(),r=$l();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Ud(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ni(e,t).next((i=>i||this.ki(e,t,r,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(yl(t))return Kc.resolve(null);let n=El(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Sl(t,null,"F"),n=El(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=$l(...r);return this.xi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.$i(t,r);return this.Mi(t,s,i,n.readTime)?this.Ni(e,Sl(t,null,"F")):this.Fi(e,s,t,n)}))))})))))}ki(e,t,n,r){return yl(t)||r.isEqual(Dc.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((i=>{const s=this.$i(t,i);return this.Mi(t,s,n,r)?this.Oi(e,t):(uc()<=ne.DEBUG&&lc("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Tl(t)),this.Fi(e,s,t,Bc(r,-1)))}))}$i(e,t){let n=new cu(Ll(e));return t.forEach(((t,r)=>{Cl(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return uc()<=ne.DEBUG&&lc("QueryEngine","Using full collection scan to execute query:",Tl(t)),this.xi.getDocumentsMatchingQuery(e,t,$c.min())}Fi(e,t,n,r){return this.xi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.Ci=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Id(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}constructor(e,t,n,r){this.persistence=e,this.Bi=t,this.serializer=r,this.Li=new su(Nc),this.qi=new Pl((e=>hl(e)),dl),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}}function Bd(e,t,n,r){return new Vd(e,t,n,r)}async function jd(e,t){const n=gc(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=$l();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Qi:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function $d(e){const t=gc(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function qd(e,t,n){let r=$l(),i=$l();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Dl();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Dc.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):lc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{zi:r,ji:i}}))}function Hd(e,t){const n=gc(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function zd(e,t){const n=gc(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ds.getTargetData(e,t).next((i=>i?(r=i,Kc.resolve(r)):n.Ds.allocateTargetId(e).next((i=>(r=new md(t,i,0,e.currentSequenceNumber),n.Ds.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Li.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function Gd(e,t,n){const r=gc(e),i=r.Li.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Wc(e))throw e;lc("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Li=r.Li.remove(t),r.qi.delete(i.target)}function Kd(e,t,n){const r=gc(e);let i=Dc.min(),s=$l();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=gc(e),i=r.qi.get(n);return void 0!==i?Kc.resolve(r.Li.get(i)):r.Ds.getTargetData(t,n)}(r,e,El(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Bi.getDocumentsMatchingQuery(e,t,n?i:Dc.min(),n?s:$l()))).next((e=>(Wd(r,Al(t),e),{documents:e,Wi:s})))))}function Wd(e,t,n){let r=e.Ui.get(t)||Dc.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ui.set(t,r)}class Qd{tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=Hl()}}class Jd{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Qd,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Br=new Qd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){lc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){lc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zd=null;function ep(){return null===Zd?Zd=268435456+Math.round(2147483648*Math.random()):Zd++,"0x"+Zd.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const tp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="WebChannelConnection";class ip extends class{get uo(){return!1}co(e,t,n,r,i){const s=ep(),o=this.ao(e,t);lc("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.ho(a,r,i),this.lo(e,o,a,n).then((t=>(lc("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw dc("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}fo(e,t,n,r,i,s){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ac,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=tp[e];return`${this.ro}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{lo(e,t,n,r){const i=ep();return new Promise(((s,o)=>{const a=new ic;a.setWithCredentials(!0),a.listenOnce(Za.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Xa.NO_ERROR:const t=a.getResponseJson();lc(rp,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Xa.TIMEOUT:lc(rp,`RPC '${e}' ${i} timed out`),o(new vc(yc.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const n=a.getStatus();if(lc(rp,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(yc).indexOf(t)>=0?t:yc.UNKNOWN}(t.status);o(new vc(e,t.message))}else o(new vc(yc.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new vc(yc.UNAVAILABLE,"Connection failed."));break;default:fc()}}finally{lc(rp,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);lc(rp,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const r=ep(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Ja(),o=Ya(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new nc({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=i.join("");lc(rp,`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new np({Wr:t=>{h?lc(rp,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(lc(rp,`Opening RPC '${e}' stream ${r} transport.`),u.open(),l=!0),lc(rp,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Hr:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,rc.EventType.OPEN,(()=>{h||lc(rp,`RPC '${e}' stream ${r} transport opened.`)})),p(u,rc.EventType.CLOSE,(()=>{h||(h=!0,lc(rp,`RPC '${e}' stream ${r} transport closed`),d.so())})),p(u,rc.EventType.ERROR,(t=>{h||(h=!0,dc(rp,`RPC '${e}' stream ${r} transport errored:`,t),d.so(new vc(yc.UNAVAILABLE,"The operation could not be completed")))})),p(u,rc.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];mc(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){lc(rp,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Ih[e];if(void 0!==t)return Ah(t)}(t),i=o.message;void 0===n&&(n=yc.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),h=!0,d.so(new vc(n,i)),u.close()}else lc(rp,`RPC '${e}' stream ${r} received:`,i),d.io(i)}})),p(o,ec.STAT_EVENT,(t=>{t.stat===tc.PROXY?lc(rp,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===tc.NOPROXY&&lc(rp,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(e){return new qh(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&lc("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===yc.RESOURCE_EXHAUSTED?(hc(t.toString()),hc("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===yc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new vc(yc.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return lc("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(lc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,r,i,s,o,a){this.Ws=e,this.bo=n,this.Po=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new ap(e,t)}}class up extends cp{Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:fc(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(mc(void 0===t||"string"==typeof t),pu.fromBase64String(t||"")):(mc(void 0===t||t instanceof Uint8Array),pu.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?yc.UNKNOWN:Ah(e.code);return new vc(t,e.message||"")}(a);n=new Mh(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yh(e,r.document.name),s=Kh(r.document.updateTime),o=r.document.createTime?Kh(r.document.createTime):Dc.min(),a=new Fu({mapValue:{fields:r.document.fields}}),c=Bu.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Dh(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Yh(e,r.document),s=r.readTime?Kh(r.readTime):Dc.min(),o=Bu.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Dh([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Yh(e,r.document),s=r.removedTargetIds||[];n=new Dh([],s,i,null)}else{if(!("filter"in t))return fc();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new kh(r),s=e.targetId;n=new Rh(s,i)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Dc.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Dc.min():t.readTime?Kh(t.readTime):Dc.min()}(e);return this.listener.zo(t,n)}jo(e){const t={};t.database=ed(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;return n=pl(r)?{documents:id(e,r)}:{query:sd(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=zh(e,t.resumeToken):t.snapshotVersion.compareTo(Dc.min())>0&&(n.readTime=Hh(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return fc()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=ed(this.serializer),t.removeTarget=e,this.Fo(t)}constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}}class lp extends cp{get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(mc(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(mc(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?Kh(e.updateTime):Kh(t);return n.isEqual(Dc.min())&&(n=Kh(t)),new sh(n,e.transformResults||[])}(e,n)))):[]),i=Kh(e.commitTime);return this.listener.Zo(i,r)}var t,n;return mc(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=ed(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>rd(this.serializer,e)))};this.Fo(t)}constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.Ho=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp extends class{}{nu(){if(this.eu)throw new vc(yc.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===yc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new vc(yc.UNKNOWN,e.toString())}))}fo(e,t,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.fo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===yc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new vc(yc.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.eu=!1}}class dp{ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(hc(t),this.ru=!1):lc("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((e=>{n.enqueueAndForget((async()=>{Ep(this)&&(lc("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=gc(e);t.du.add(4),await mp(t),t.mu.set("Unknown"),t.du.delete(4),await fp(t)}(this))}))})),this.mu=new dp(n,r)}}async function fp(e){if(Ep(e))for(const t of e.wu)await t(!0)}async function mp(e){for(const t of e.wu)await t(!1)}function gp(e,t){const n=gc(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),bp(n)?_p(n):Bp(n).No()&&vp(n,t))}function yp(e,t){const n=gc(e),r=Bp(n);n.fu.delete(t),r.No()&&wp(n,t),0===n.fu.size&&(r.No()?r.$o():Ep(n)&&n.mu.set("Unknown"))}function vp(e,t){e.gu.Ot(t.targetId),Bp(e).jo(t)}function wp(e,t){e.gu.Ot(t),Bp(e).Wo(t)}function _p(e){e.gu=new Uh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),Bp(e).start(),e.mu.ou()}function bp(e){return Ep(e)&&!Bp(e).xo()&&e.fu.size>0}function Ep(e){return 0===gc(e).du.size}function Sp(e){e.gu=void 0}async function kp(e){e.fu.forEach(((t,n)=>{vp(e,t)}))}async function Ip(e,t){Sp(e),bp(e)?(e.mu.au(t),_p(e)):e.mu.set("Unknown")}async function Tp(e,t,n){if(e.mu.set("Online"),t instanceof Mh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.fu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.fu.delete(r),e.gu.removeTarget(r))}(e,t)}catch(n){lc("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Cp(e,n)}else if(t instanceof Dh?e.gu.Kt(t):t instanceof Rh?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(Dc.min()))try{const t=await $d(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.gu.Xt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.fu.get(r);i&&e.fu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(pu.EMPTY_BYTE_STRING,n.snapshotVersion)),wp(e,t);const r=new md(n.target,t,1,n.sequenceNumber);vp(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){lc("RemoteStore","Failed to raise snapshot:",t),await Cp(e,t)}}async function Cp(e,t,n){if(!Wc(t))throw t;e.du.add(1),await mp(e),e.mu.set("Offline"),n||(n=()=>$d(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{lc("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await fp(e)}))}function Ap(e,t){return t().catch((n=>Cp(e,n,t)))}async function Lp(e){const t=gc(e),n=jp(t);let r=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Np(t);)try{const e=await Hd(t.localStore,r);if(null===e){0===t.lu.length&&n.$o();break}r=e.batchId,Pp(t,e)}catch(e){await Cp(t,e)}Op(t)&&Dp(t)}function Np(e){return Ep(e)&&e.lu.length<10}function Pp(e,t){e.lu.push(t);const n=jp(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Op(e){return Ep(e)&&!jp(e).xo()&&e.lu.length>0}function Dp(e){jp(e).start()}async function Rp(e){jp(e).tu()}async function Mp(e){const t=jp(e);for(const n of e.lu)t.Yo(n.mutations)}async function xp(e,t,n){const r=e.lu.shift(),i=Eh.from(r,t,n);await Ap(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Lp(e)}async function Up(e,t){t&&jp(e).Jo&&await async function(e,t){if(Ch(n=t.code)&&n!==yc.ABORTED){const n=e.lu.shift();jp(e).Oo(),await Ap(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Lp(e)}var n}(e,t),Op(e)&&Dp(e)}async function Fp(e,t){const n=gc(e);n.asyncQueue.verifyOperationInProgress(),lc("RemoteStore","RemoteStore received new credentials");const r=Ep(n);n.du.add(3),await mp(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await fp(n)}async function Vp(e,t){const n=gc(e);t?(n.du.delete(2),await fp(n)):t||(n.du.add(2),await mp(n),n.mu.set("Unknown"))}function Bp(e){return e.yu||(e.yu=function(e,t,n){const r=gc(e);return r.nu(),new up(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Jr:kp.bind(null,e),Zr:Ip.bind(null,e),zo:Tp.bind(null,e)}),e.wu.push((async t=>{t?(e.yu.Oo(),bp(e)?_p(e):e.mu.set("Unknown")):(await e.yu.stop(),Sp(e))}))),e.yu}function jp(e){return e.pu||(e.pu=function(e,t,n){const r=gc(e);return r.nu(),new lp(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Rp.bind(null,e),Zr:Up.bind(null,e),Xo:Mp.bind(null,e),Zo:xp.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await Lp(e)):(await e.pu.stop(),e.lu.length>0&&(lc("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class $p{static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new $p(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new vc(yc.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new wc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function qp(e,t){if(hc("AsyncQueue",`${t}: ${e}`),Wc(e))return new vc(yc.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{static emptySet(e){return new Hp(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hp))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Hp;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Fc.comparator(t.key,n.key):(e,t)=>Fc.comparator(e.key,t.key),this.keyedMap=Ml(),this.sortedSet=new su(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{track(e){const t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):fc():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Iu=new su(Fc.comparator)}}class Gp{static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Gp(e,t,Hp.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.Eu=void 0,this.listeners=[]}}class Wp{constructor(){this.queries=new Pl((e=>Il(e)),kl),this.onlineState="Unknown",this.Au=new Set}}async function Qp(e,t){const n=gc(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Kp),i)try{s.Eu=await n.onListen(r)}catch(e){const n=qp(e,`Initialization of query '${Tl(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Ru(n.onlineState),s.Eu&&t.vu(s.Eu)&&Zp(n)}async function Jp(e,t){const n=gc(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Yp(e,t){const n=gc(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.vu(e)&&(r=!0);i.Eu=e}}r&&Zp(n)}function Xp(e,t,n){const r=gc(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Zp(e){e.Au.forEach((e=>{e.next()}))}class ef{vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Gp(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=Gp.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tf{constructor(e){this.key=e}}class nf{constructor(e){this.key=e}}class rf{get Qu(){return this.Lu}zu(e,t){const n=t?t.ju:new zp,r=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Cl(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let p=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),p=!0):this.Wu(u,l)||(n.track({type:2,doc:l}),p=!0,(a&&this.Ku(l,a)>0||c&&this.Ku(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),p=!0):u&&!l&&(n.track({type:1,doc:u}),p=!0,(a||c)&&(o=!0)),p&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Gu:s,ju:n,Mi:o,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fc()}};return n(e)-n(t)}(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const s=t?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new Gp(this.query,e.Gu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new zp,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=$l(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));const t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new nf(e))})),this.Uu.forEach((n=>{e.has(n)||t.push(new tf(n))})),t}Xu(e){this.Lu=e.Wi,this.Uu=$l();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return Gp.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=$l(),this.mutatedKeys=$l(),this.Ku=Ll(e),this.Gu=new Hp(this.Ku)}}class sf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class of{constructor(e){this.key=e,this.ec=!1}}class af{get isPrimaryClient(){return!0===this.fc}constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Pl((e=>Il(e)),kl),this.ic=new Map,this.rc=new Set,this.oc=new su(Fc.comparator),this.uc=new Map,this.cc=new Ad,this.ac={},this.hc=new Map,this.lc=Ed.bn(),this.onlineState="Unknown",this.fc=void 0}}async function cf(e,t){const n=Tf(e);let r,i;const s=n.sc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const e=await zd(n.localStore,El(t));n.isPrimaryClient&&gp(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await uf(n,t,r,"current"===s,e.resumeToken)}return i}async function uf(e,t,n,r,i){e.dc=(t,n,r)=>async function(e,t,n,r){let i=t.view.zu(n);i.Mi&&(i=await Kd(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return _f(e,t.targetId,o.Yu),o.snapshot}(e,t,n,r);const s=await Kd(e.localStore,t,!0),o=new rf(t,s.Wi),a=o.zu(s.documents),c=Oh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);_f(e,n,u.Yu);const l=new sf(t,n,o);return e.sc.set(t,l),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function lf(e,t){const n=gc(e),r=n.sc.get(t),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter((e=>!kl(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gd(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),yp(n.remoteStore,r.targetId),vf(n,r.targetId)})).catch(Gc)):(vf(n,r.targetId),await Gd(n.localStore,r.targetId,!0))}async function hf(e,t){const n=gc(e);try{const e=await function(e,t){const n=gc(e),r=t.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ds.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);var l,h,d;t.targetMismatches.has(a)?u=u.withResumeToken(pu.EMPTY_BYTE_STRING,Dc.min()).withLastLimboFreeSnapshotVersion(Dc.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ds.updateTargetData(e,u))}));let a=Dl(),c=$l();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(qd(e,s,t.documentUpdates).next((e=>{a=e.zi,c=e.ji}))),!r.isEqual(Dc.min())){const t=n.Ds.getLastRemoteSnapshotVersion(e).next((t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Kc.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Li=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.uc.get(t);r&&(mc(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ec=!0:e.modifiedDocuments.size>0?mc(r.ec):e.removedDocuments.size>0&&(mc(r.ec),r.ec=!1))})),await Sf(n,e,t)}catch(e){await Gc(e)}}function df(e,t,n){const r=gc(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.sc.forEach(((n,r)=>{const i=r.view.Ru(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=gc(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Ru(t)&&(r=!0)})),r&&Zp(n)}(r.eventManager,t),e.length&&r.nc.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function pf(e,t,n){const r=gc(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.uc.get(t),s=i&&i.key;if(s){let e=new su(Fc.comparator);e=e.insert(s,Bu.newNoDocument(s,Dc.min()));const n=$l().add(s),i=new Ph(Dc.min(),new Map,new cu(Nc),e,n);await hf(r,i),r.oc=r.oc.remove(s),r.uc.delete(t),Ef(r)}else await Gd(r.localStore,t,!1).then((()=>vf(r,t,n))).catch(Gc)}async function ff(e,t){const n=gc(e),r=t.batch.batchId;try{const e=await function(e,t){const n=gc(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Kc.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);mc(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=$l();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);yf(n,r,null),gf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sf(n,e)}catch(e){await Gc(e)}}async function mf(e,t,n){const r=gc(e);try{const e=await function(e,t){const n=gc(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(mc(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);yf(r,t,n),gf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Sf(r,e)}catch(e){await Gc(e)}}function gf(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function yf(e,t,n){const r=gc(e);let i=r.ac[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function vf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ic.get(t))e.sc.delete(r),n&&e.nc.wc(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||wf(e,t)}))}function wf(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(yp(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Ef(e))}function _f(e,t,n){for(const r of n)r instanceof tf?(e.cc.addReference(r.key,t),bf(e,r)):r instanceof nf?(lc("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||wf(e,r.key)):fc()}function bf(e,t){const n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(lc("SyncEngine","New document in limbo: "+n),e.rc.add(r),Ef(e))}function Ef(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new Fc(Mc.fromString(t)),r=e.lc.next();e.uc.set(r,new of(n)),e.oc=e.oc.insert(n,r),gp(e.remoteStore,new md(El(gl(n.path)),r,2,Qc.ct))}}async function Sf(e,t,n){const r=gc(e),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach(((e,a)=>{o.push(r.dc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Ud.Di(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.nc.zo(i),await async function(e,t){const n=gc(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Kc.forEach(t,(t=>Kc.forEach(t.Vi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Kc.forEach(t.Si,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Wc(e))throw e;lc("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Li.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Li=n.Li.insert(t,i)}}}(r.localStore,s))}async function kf(e,t){const n=gc(e);if(!n.currentUser.isEqual(t)){lc("SyncEngine","User change. New user:",t.toKey());const e=await jd(n.localStore,t);n.currentUser=t,(r=n).hc.forEach((e=>{e.forEach((e=>{e.reject(new vc(yc.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.hc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Sf(n,e.Qi)}var r}function If(e,t){const n=gc(e),r=n.uc.get(t);if(r&&r.ec)return $l().add(r.key);{let e=$l();const r=n.ic.get(t);if(!r)return e;for(const t of r){const r=n.sc.get(t);e=e.unionWith(r.view.Qu)}return e}}function Tf(e){const t=gc(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=hf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=If.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=pf.bind(null,t),t.nc.zo=Yp.bind(null,t.eventManager),t.nc.wc=Xp.bind(null,t.eventManager),t}function Cf(e){const t=gc(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ff.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mf.bind(null,t),t}class Af{async initialize(e){this.serializer=op(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Bd(this.persistence,new Fd,e.initialUser,this.serializer)}createPersistence(e){return new Rd(xd.Fs,this.serializer)}createSharedClientState(e){return new Jd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Lf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>df(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=kf.bind(null,this.syncEngine),await Vp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Wp}createDatastore(e){const t=op(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ip(r));var r,i,s;return i=e.authCredentials,s=e.appCheckCredentials,new hp(i,s,n,t)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>df(this.syncEngine,e,0),s=Xd.D()?new Xd:new Yd,new pp(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new af(e,t,n,r,i,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=gc(e);lc("RemoteStore","RemoteStore shutting down."),t.du.add(5),await mp(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nf{next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):hc("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pf{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new vc(yc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=qp(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=oc.UNAUTHENTICATED,this.clientId=Lc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{lc("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(lc("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function Of(e,t){e.asyncQueue.verifyOperationInProgress(),lc("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await jd(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Df(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Mf(e);lc("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Fp(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Fp(t.remoteStore,n))),e._onlineComponents=t}function Rf(e){return"FirebaseError"===e.name?e.code===yc.FAILED_PRECONDITION||e.code===yc.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Mf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){lc("FirestoreClient","Using user provided OfflineComponentProvider");try{await Of(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Rf(n))throw n;dc("Error using user provided cache. Falling back to memory cache: "+n),await Of(e,new Af)}}else lc("FirestoreClient","Using default OfflineComponentProvider"),await Of(e,new Af);return e._offlineComponents}async function xf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(lc("FirestoreClient","Using user provided OnlineComponentProvider"),await Df(e,e._uninitializedComponentsProvider._online)):(lc("FirestoreClient","Using default OnlineComponentProvider"),await Df(e,new Lf))),e._onlineComponents}function Uf(e){return xf(e).then((e=>e.syncEngine))}async function Ff(e){const t=await xf(e),n=t.eventManager;return n.onListen=cf.bind(null,t.syncEngine),n.onUnlisten=lf.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(e,t,n){if(!n)throw new vc(yc.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function jf(e){if(!Fc.isDocumentKey(e))throw new vc(yc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function $f(e){if(Fc.isDocumentKey(e))throw new vc(yc.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function qf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":fc()}function Hf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new vc(yc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qf(e);throw new vc(yc.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zf{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new vc(yc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new vc(yc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new vc(yc.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{get app(){if(!this._app)throw new vc(yc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new vc(yc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new bc;switch(e.type){case"firstParty":return new Ic(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new vc(yc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Vf.get(e);t&&(lc("ComponentProvider","Removing Datastore"),Vf.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zf({}),this._settingsFrozen=!1}}function Kf(e,t,n,r={}){var i;const s=(e=Hf(e,Gf))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&dc("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=oc.MOCK_USER;else{t=O(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new vc(yc.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new oc(s)}e._authCredentials=new Ec(new _c(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wf(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class Qf{withConverter(e){return new Qf(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class Jf extends Qf{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wf(this.firestore,null,new Fc(e))}withConverter(e){return new Jf(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,gl(n)),this._path=n,this.type="collection"}}function Yf(e,t,...n){if(e=J(e),Bf("collection","path",t),e instanceof Gf){const r=Mc.fromString(t,...n);return $f(r),new Jf(e,null,r)}{if(!(e instanceof Wf||e instanceof Jf))throw new vc(yc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Mc.fromString(t,...n));return $f(r),new Jf(e.firestore,null,r)}}function Xf(e,t,...n){if(e=J(e),1===arguments.length&&(t=Lc.A()),Bf("doc","path",t),e instanceof Gf){const r=Mc.fromString(t,...n);return jf(r),new Wf(e,null,new Fc(r))}{if(!(e instanceof Wf||e instanceof Jf))throw new vc(yc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Mc.fromString(t,...n));return jf(r),new Wf(e.firestore,e instanceof Jf?e.converter:null,new Fc(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zf{get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=sp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new wc;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Wc(e))throw e;lc("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;throw hc("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const r=$p.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(r),r}Uc(){this.Mc&&fc()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new ap(this,"async_queue_retry"),this.qc=()=>{const e=sp();e&&lc("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=sp();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}}function em(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class tm extends Gf{_terminate(){return this._firestoreClient||rm(this),this._firestoreClient.terminate()}constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Zf,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function nm(e){return e._firestoreClient||rm(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function rm(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new bu(o,a,c,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams));var o,a,c,u;e._firestoreClient=new Pf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class im{static fromBase64String(e){try{return new im(pu.fromBase64String(e))}catch(e){throw new vc(yc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new im(pu.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new vc(yc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Uc(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class om{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Nc(this._lat,e._lat)||Nc(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new vc(yc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new vc(yc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=/^__.*__$/;class um{toMutation(e,t){return null!==this.fieldMask?new mh(e,this.data,this.fieldMask,t,this.fieldTransforms):new fh(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function lm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fc()}}class hm{get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new hm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.ea(e),r}na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Em(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(lm(this.Yc)&&cm.test(e))throw this.ia('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class dm{ua(e,t,n,r=!1){return new hm({Yc:e,methodName:t,oa:n,path:Uc.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||op(e)}}function pm(e){const t=e._freezeSettings(),n=op(e._databaseId);return new dm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function fm(e,t,n,r,i,s={}){const o=e.ua(s.merge||s.mergeFields?2:0,t,n,i);vm("Data must be an object, but it was:",o,r);const a=gm(r,o);let c,u;if(s.merge)c=new lu(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=wm(t,r,n);if(!o.contains(i))throw new vc(yc.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Sm(e,i)||e.push(i)}c=new lu(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new um(new Fu(a),c,u)}function mm(e,t){if(ym(e=J(e)))return vm("Unsupported field value:",t,e),gm(e,t);if(e instanceof om)return function(e,t){if(!lm(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=mm(i,t.sa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=J(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Kl(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Oc.fromDate(e);return{timestampValue:Hh(t.serializer,n)}}if(e instanceof Oc){const n=new Oc(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Hh(t.serializer,n)}}if(e instanceof am)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof im)return{bytesValue:zh(t.serializer,e._byteString)};if(e instanceof Wf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wh(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${qf(e)}`)}(e,t)}function gm(e,t){const n={};return iu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ru(e,((e,r)=>{const i=mm(r,t.Xc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function ym(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Oc||e instanceof am||e instanceof im||e instanceof Wf||e instanceof om)}function vm(e,t,n){if(!ym(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=qf(n);throw"an object"===r?t.ia(e+" a custom object"):t.ia(e+" "+r)}var r}function wm(e,t,n){if((t=J(t))instanceof sm)return t._internalPath;if("string"==typeof t)return bm(e,t);throw Em("Field path arguments must be of type string or ",e,!1,void 0,n)}const _m=new RegExp("[~\\*/\\[\\]]");function bm(e,t,n){if(t.search(_m)>=0)throw Em(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sm(...t.split("."))._internalPath}catch(r){throw Em(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Em(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new vc(yc.INVALID_ARGUMENT,a+e+c)}function Sm(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{get id(){return this._key.path.lastSegment()}get ref(){return new Wf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Im(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}}class Im extends km{data(){return super.data()}}function Tm(e,t){return"string"==typeof t?bm(e,t):t instanceof sm?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new vc(yc.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Am{convertValue(e,t="none"){switch(ku(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gu(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw fc()}}convertObject(e,t){const n={};return ru(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new am(gu(e.latitude),gu(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=wu(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(_u(e));default:return null}}convertTimestamp(e){const t=mu(e);return new Oc(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Mc.fromString(e);mc(fd(n));const r=new Eu(n.get(1),n.get(3)),i=new Fc(n.popFirst(5));return r.isEqual(t)||hc(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nm{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class Pm extends km{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Om(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Tm("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}class Om extends Pm{data(e={}){return super.data(e)}}class Dm{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Om(this._firestore,this._userDataWriter,n.key,n,new Nm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new vc(yc.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Om(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Nm(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Om(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Nm(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Rm(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Nm(r.hasPendingWrites,r.fromCache),this.query=n}}function Rm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fc()}}class Mm extends Am{convertBytes(e){return new im(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wf(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function xm(e,t,n){e=Hf(e,Wf);const r=Hf(e.firestore,tm),i=Lm(e.converter,t,n);return Fm(r,[fm(pm(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,oh.none())])}function Um(e,...t){var n,r,i;e=J(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||em(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(em(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof Wf)u=Hf(e.firestore,tm),l=gl(e._key.path),c={next:n=>{t[o]&&t[o](Vm(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Hf(e,Qf);u=Hf(n.firestore,tm),l=n._query;const r=new Mm(u);c={next:e=>{t[o]&&t[o](new Dm(u,r,n,e))},error:t[o+1],complete:t[o+2]},Cm(e._query)}return function(e,t,n,r){const i=new Nf(r),s=new ef(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Qp(await Ff(e),s))),()=>{i.yc(),e.asyncQueue.enqueueAndForget((async()=>Jp(await Ff(e),s)))}}(nm(u),l,a,c)}function Fm(e,t){return function(e,t){const n=new wc;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=Cf(e);try{const e=await function(e,t){const n=gc(e),r=Oc.now(),i=t.reduce(((e,t)=>e.add(t.key)),$l());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Dl(),c=$l();return n.Ki.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=dh(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new mh(e.key,t,Vu(t.value.mapValue),oh.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:xl(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ac[e.currentUser.toKey()];r||(r=new su(Nc)),r=r.insert(t,n),e.ac[e.currentUser.toKey()]=r}(r,e.batchId,n),await Sf(r,e.changes),await Lp(r.remoteStore)}catch(e){const t=qp(e,"Failed to persist write");n.reject(t)}}(await Uf(e),t,n))),n.promise}(nm(e),t)}function Vm(e,t,n){const r=n.docs.get(t._key),i=new Mm(e);return new Pm(e,i,t._key,r,new Nm(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){ac=Ve,Me(new Y("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new tm(new Sc(e.getProvider("auth-internal")),new Cc(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new vc(yc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eu(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),$e(sc,"3.10.0",e),$e(sc,"3.10.0","esm2017")}();const Bm=Be({apiKey:"AIzaSyAfz0zKTMfxu6wjOe8cEAMtCcpz5hitokc",authDomain:"filmoteka-599e8.firebaseapp.com",databaseURL:"https://filmoteka-599e8-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-599e8",storageBucket:"filmoteka-599e8.appspot.com",messagingSenderId:"448204349167",appId:"1:448204349167:web:ac77389e13cfaab0db051a",measurementId:"G-C80DY74WT0"}),jm=function(e,t){const n="string"==typeof e?e:t||"(default)",r=xe("object"==typeof e?e:je(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=L("firestore");e&&Kf(r,...e)}return r}(Bm),$m=function(e=je()){const t=xe(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=xe(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(j(n.getOptions(),null!=t?t:{}))return e;st(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Qr,persistence:[ir,jn,qn]}),r=N("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Zr)return;const r=null==t?void 0:t.token;ei!==r&&(ei=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){J(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){J(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=A("auth");return s&&cn(n,`http://${s}`),n}(Bm),qm=new Sn,Hm=new kn;function zm(e,t){const n={error:{icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n                    </svg>',color:"#B22222"},success:{icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />\n                    </svg>',color:"#008000"}};$("#notification").css("background-color",n[e].color),$(".notification_icon").html(n[e].icon),$(".notification_text").html(t),$("#notification").animate({left:"10px",opacity:1},200,"swing"),setTimeout((()=>{$("#notification").animate({bottom:"-100px",opacity:0},{duration:200,easing:"swing",complete:()=>{$("#notification").removeAttr("style")}})}),4e3)}var Gm=function(){$("#spinner").fadeIn(),$("#blackscreen").fadeIn()},Km=function(){$("#spinner").fadeOut(),$("#blackscreen").fadeOut(300)};const Wm=document.querySelector(".home"),Qm=document.querySelector(".library"),Jm=document.querySelectorAll("#home"),Ym=document.querySelectorAll("#library"),Xm=document.querySelector("#login"),Zm=document.querySelectorAll(".logout"),eg=document.querySelector("#register"),tg=document.querySelector("#section-modalus"),ng=document.querySelector(".convenience-menu"),rg=(document.querySelector("body"),document.querySelector(".main")),ig=document.querySelector(".main-library");function sg(){Un($m).then((()=>{sessionStorage.removeItem("uid"),og(),zm("success","You have successfully logged out.")}))}function og(){Qm.classList.add("invisible"),Wm.classList.remove("invisible"),ig.classList.add("invisible"),rg.classList.remove("invisible"),tg.classList.add("invisible"),ng.classList.remove("invisible")}function ag(){Qm.classList.remove("invisible"),Wm.classList.add("invisible"),ig.classList.remove("invisible"),rg.classList.add("invisible"),tg.classList.add("invisible"),ng.classList.add("invisible")}window.addEventListener("load",(async()=>{var e,t,n;await Gm(),e=e=>{Km(),null!==e?(sessionStorage.setItem("uid",e.uid),Ym[0].parentNode.classList.remove("invisible"),Ym[1].parentNode.classList.remove("invisible"),Xm.classList.add("invisible"),Zm[0].classList.remove("invisible"),Zm[1].classList.remove("invisible")):(Ym[0].parentNode.classList.add("invisible"),Ym[1].parentNode.classList.add("invisible"),Xm.classList.remove("invisible"),Zm[0].classList.add("invisible"),Zm[1].classList.add("invisible"))},J($m).onAuthStateChanged(e,t,n)})),Jm[0].addEventListener("click",og),Jm[1].addEventListener("click",og),Ym[0].addEventListener("click",ag),Ym[1].addEventListener("click",ag),Xm.addEventListener("click",(function(){tg.classList.remove("invisible"),rg.classList.add("invisible"),ng.classList.add("invisible")})),eg.addEventListener("click",(function(){tg.classList.remove("invisible"),rg.classList.add("invisible"),ng.classList.add("invisible")})),Zm[0].addEventListener("click",sg),Zm[1].addEventListener("click",sg);const cg="https://api.themoviedb.org",ug="070151ea430b4e74dbca9bca592b262c";let lg="",hg="",dg="",pg=[];var fg={fetchTrendFilms:async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=070151ea430b4e74dbca9bca592b262c&page=${e}`);return await t.json()}catch(e){}finally{pg.length=[],pg.push("trendFilms")}},fetchSearchFilms:async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=070151ea430b4e74dbca9bca592b262c&query=${lg}&language=en-US&page=${e}&include_adult=false`);return await t.json()}catch(e){}finally{pg.length=[],pg.push("searchFilms")}},fetchFilmById:async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=070151ea430b4e74dbca9bca592b262c&language=$language=en-US`);return await t.json()}catch(e){}},fetchGenres:async function(){try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=070151ea430b4e74dbca9bca592b262c&language=en-US");return(await e.json()).genres}catch(e){}},fetchFilmsByGenre:async function(e,t){try{const n=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=070151ea430b4e74dbca9bca592b262c&with_genres=${e}&language=en-US&page=${t}`);return await n.json()}catch(e){}finally{pg.length=[],pg.push("byGenreFilms")}},fetchDiscover:async function(e,t){try{const n=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=070151ea430b4e74dbca9bca592b262c&language=en-US&page=${t}&sort_by=${e}`);return await n.json()}catch(e){}finally{pg.length=[],pg.push("discoverFilms")}},BASE_URL:cg,API_KEY:ug,page:1,fetchType:pg,searchQuery:e=>{lg=e},takeGenre:e=>{hg=e},sortByMethod:e=>{dg=e}};$(".watched").click((async()=>{Gm();const e=sessionStorage.getItem("uid");let t=[];Um(Yf(jm,"watched"),(n=>{n.forEach((n=>{n.data().userId==e&&fg.fetchFilmById(n.data().filmId).then((e=>{t.push(e)}))})),Km(),console.log(t)}))})),$(".queue").click((async()=>{Gm();const e=sessionStorage.getItem("uid");let t=[];Um(Yf(jm,"queue"),(n=>{n.forEach((n=>{n.data().userId==e&&fg.fetchFilmById(n.data().filmId).then((e=>{t.push(e)}))})),Km(),console.log(t)}))}));const mg=document.querySelector(".theme-switch__toggle"),gg=document.querySelector("body"),yg=document.getElementsByTagName("h2"),vg=document.querySelector(".film_modal"),wg=document.querySelector(".footer");localStorage.getItem("theme");function _g(e){if("dark"===e){gg.classList.add("dark_theme"),vg.classList.add("dark_modal"),wg.style.backgroundColor="#000000cf",wg.style.color="white";for(let e=0;e<yg.length;e++){yg[e].classList.add("dark_theme_title")}mg.checked=!0}else if("light"===e){gg.classList.remove("dark_theme"),vg.classList.remove("dark_modal"),wg.style.backgroundColor="#fff",wg.style.color="#545454";for(let e=0;e<yg.length;e++){yg[e].classList.remove("dark_theme_title")}mg.checked=!1}}mg.addEventListener("click",(function(){!0===mg.checked?(localStorage.setItem("theme","dark"),_g("dark")):(localStorage.setItem("theme","light"),_g("light"))}));var bg=_g;function Eg(){const e=document.getElementsByClassName("film-card__release"),t=document.getElementsByClassName("film-card__genres"),n=document.getElementsByClassName("film-card__vote"),r=document.getElementsByClassName("film-card__vote-count");var i=new Date;for(let t=0;t<n.length;t++){let o=String(n[t].innerHTML.slice(0,3)),a=e[t].innerHTML.split("-");var s=new Date(Number(a[0]),Number(a[1]-1),Number(a[2]));n[t].innerHTML=o%1!=0?Number(o):Number(o)+".0",s>i&&(n[t].innerHTML="New!!!",n[t].style.width="60px",n[t].style.backgroundColor="red",r[t].innerHTML=`Release-data: ${e[t].innerHTML}`,r[t].style.width="100%")}for(let t=0;t<e.length;t++){let n=String(e[t].innerHTML).slice(0,4);e[t].innerHTML=Number(n)}fg.fetchGenres().then((e=>{for(let n=0;n<t.length;n++){const r=t[n].innerHTML.split(","),i=e.map((e=>e.id)),s=e.map((e=>e.name));r.forEach((function(e,o){for(let a=0;a<i.length;a++)e==i[a]&&(this[o]=" "+s[a]),t[n].innerHTML=r}),r)}}))}var Sg,kg={};function Ig(e){return e&&e.__esModule?e:{default:e}}kg.__esModule=!0;var Tg={};function Cg(e){return e&&e.__esModule?e:{default:e}}function Ag(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Tg.__esModule=!0;var Lg,Ng,Pg,Og,Dg,Rg,Mg,xg,Ug,Fg={};function Vg(e){return e&&e.__esModule?e:{default:e}}e(Fg,"__esModule",(function(){return Lg}),(function(e){return Lg=e})),e(Fg,"HandlebarsEnvironment",(function(){return Ng}),(function(e){return Ng=e})),e(Fg,"VERSION",(function(){return Pg}),(function(e){return Pg=e})),e(Fg,"COMPILER_REVISION",(function(){return Og}),(function(e){return Og=e})),e(Fg,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return Dg}),(function(e){return Dg=e})),e(Fg,"REVISION_CHANGES",(function(){return Rg}),(function(e){return Rg=e})),e(Fg,"log",(function(){return Mg}),(function(e){return Mg=e})),e(Fg,"createFrame",(function(){return xg}),(function(e){return xg=e})),e(Fg,"logger",(function(){return Ug}),(function(e){return Ug=e})),Lg=!0,Ng=Gy;var Bg,jg,$g,qg,Hg,zg,Gg,Kg,Wg,Qg,Jg,Yg={};e(Yg,"__esModule",(function(){return Bg}),(function(e){return Bg=e})),e(Yg,"extend",(function(){return jg}),(function(e){return jg=e})),e(Yg,"indexOf",(function(){return $g}),(function(e){return $g=e})),e(Yg,"escapeExpression",(function(){return qg}),(function(e){return qg=e})),e(Yg,"isEmpty",(function(){return Hg}),(function(e){return Hg=e})),e(Yg,"createFrame",(function(){return zg}),(function(e){return zg=e})),e(Yg,"blockParams",(function(){return Gg}),(function(e){return Gg=e})),e(Yg,"appendContextPath",(function(){return Kg}),(function(e){return Kg=e})),e(Yg,"toString",(function(){return Wg}),(function(e){return Wg=e})),e(Yg,"isFunction",(function(){return Qg}),(function(e){return Qg=e})),e(Yg,"isArray",(function(){return Jg}),(function(e){return Jg=e})),Bg=!0,jg=ny,$g=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},qg=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return ey.test(e)?e.replace(Zg,ty):e},Hg=function(e){return!e&&0!==e||!(!sy(e)||0!==e.length)},zg=function(e){var t=ny({},e);return t._parent=e,t},Gg=function(e,t){return e.path=t,e},Kg=function(e,t){return(e?e+".":"")+t};var Xg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},Zg=/[&<>"'`=]/g,ey=/[&<>"'`=]/;function ty(e){return Xg[e]}function ny(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var ry=Object.prototype.toString;Wg=ry;var iy=function(e){return"function"==typeof e};iy(/x/)&&(Qg=iy=function(e){return"function"==typeof e&&"[object Function]"===ry.call(e)}),Qg=iy;var sy=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===ry.call(e)};Jg=sy;var oy={__esModule:!0},ay=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function cy(e,t){var n=t&&t.loc,r=void 0,i=void 0,s=void 0,o=void 0;n&&(r=n.start.line,i=n.end.line,s=n.start.column,o=n.end.column,e+=" - "+r+":"+s);for(var a=Error.prototype.constructor.call(this,e),c=0;c<ay.length;c++)this[ay[c]]=a[ay[c]];Error.captureStackTrace&&Error.captureStackTrace(this,cy);try{n&&(this.lineNumber=r,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:o,enumerable:!0})):(this.column=s,this.endColumn=o))}catch(e){}}cy.prototype=new Error,oy.default=cy;var uy,ly,hy=Vg(oy=oy.default);function dy(e){return e&&e.__esModule?e:{default:e}}uy=function(e){fy.default(e),vy.default(e),by.default(e),ky.default(e),Ty.default(e),Ay.default(e),Oy.default(e)},ly=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var py={__esModule:!0,default:function(e){e.registerHelper("blockHelperMissing",(function(t,n){var r=n.inverse,i=n.fn;if(!0===t)return i(this);if(!1===t||null==t)return r(this);if(Jg(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){var s=zg(n.data);s.contextPath=Kg(n.data.contextPath,n.name),n={data:s}}return i(t,n)}))}},fy=dy(py=py.default),my={};my.__esModule=!0;var gy,yy=(gy=oy)&&gy.__esModule?gy:{default:gy};my.default=function(e){e.registerHelper("each",(function(e,n){if(!n)throw new yy.default("Must pass iterator to #each");var r,i=n.fn,s=n.inverse,o=0,a="",c=void 0,u=void 0;function l(t,n,r){c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!r,u&&(c.contextPath=u+t)),a+=i(e[t],{data:c,blockParams:Gg([e[t],t],[u+t,null])})}if(n.data&&n.ids&&(u=Kg(n.data.contextPath,n.ids[0])+"."),Qg(e)&&(e=e.call(this)),n.data&&(c=zg(n.data)),e&&"object"==typeof e)if(Jg(e))for(var h=e.length;o<h;o++)o in e&&l(o,o,o===e.length-1);else if(t.Symbol&&e[t.Symbol.iterator]){for(var d=[],p=e[t.Symbol.iterator](),f=p.next();!f.done;f=p.next())d.push(f.value);for(h=(e=d).length;o<h;o++)l(o,o,o===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&l(r,o-1),r=e,o++})),void 0!==r&&l(r,o-1,!0);return 0===o&&(a=s(this)),a}))};var vy=dy(my=my.default),wy={};wy.__esModule=!0;var _y=function(e){return e&&e.__esModule?e:{default:e}}(oy);wy.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new _y.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))};var by=dy(wy=wy.default),Ey={};Ey.__esModule=!0;var Sy=function(e){return e&&e.__esModule?e:{default:e}}(oy);Ey.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new Sy.default("#if requires exactly one argument");return Qg(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||Hg(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new Sy.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))};var ky=dy(Ey=Ey.default),Iy={__esModule:!0,default:function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),t[0]=i,e.log.apply(e,t)}))}},Ty=dy(Iy=Iy.default),Cy={__esModule:!0,default:function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}},Ay=dy(Cy=Cy.default),Ly={};Ly.__esModule=!0;var Ny=function(e){return e&&e.__esModule?e:{default:e}}(oy);Ly.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new Ny.default("#with requires exactly one argument");Qg(e)&&(e=e.call(this));var n=t.fn;if(Hg(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=zg(t.data)).contextPath=Kg(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:Gg([e],[r&&r.contextPath])})}))};var Py,Oy=dy(Ly=Ly.default);Py=function(e){Ry.default(e)};var Dy={__esModule:!0,default:function(e){e.registerDecorator("inline",(function(e,t,n,r){var i=e;return t.partials||(t.partials={},i=function(r,i){var s=n.partials;n.partials=jg({},s,t.partials);var o=e(r,i);return n.partials=s,o}),t.partials[r.args[0]]=r.fn,i}))}},Ry=function(e){return e&&e.__esModule?e:{default:e}}(Dy=Dy.default);var My={__esModule:!0},xy={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=$g(xy.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=xy.lookupLevel(e),"undefined"!=typeof console&&xy.lookupLevel(xy.level)<=e){var t=xy.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[t].apply(console,r)}}};My.default=xy;var Uy,Fy,Vy,By,jy=Vg(My=My.default);Uy=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:By(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:By(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},Fy=function(e,t,n){return Hy("function"==typeof e?t.methods:t.properties,n)},Vy=function(){Object.keys(qy).forEach((function(e){delete qy[e]}))},By=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return jg.apply(void 0,[Object.create(null)].concat(t))};var $y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(My),qy=Object.create(null);function Hy(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==qy[e]&&(qy[e]=!0,$y.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}Pg="4.7.7";Og=8;Dg=7;Rg={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var zy="[object Object]";function Gy(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},uy(this),Py(this)}Gy.prototype={constructor:Gy,logger:jy.default,log:jy.default.log,registerHelper:function(e,t){if(Wg.call(e)===zy){if(t)throw new hy.default("Arg not supported with multiple helpers");jg(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(Wg.call(e)===zy)jg(this.partials,e);else{if(void 0===t)throw new hy.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(Wg.call(e)===zy){if(t)throw new hy.default("Arg not supported with multiple decorators");jg(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){Vy()}};var Ky=jy.default.log;Mg=Ky,xg=zg,Ug=jy.default;var Wy=Ag(Fg),Qy={};function Jy(e){this.string=e}Qy.__esModule=!0,Jy.prototype.toString=Jy.prototype.toHTML=function(){return""+this.string},Qy.default=Jy;var Yy,Xy,Zy,ev,tv,nv,rv,iv=Cg(Qy=Qy.default),sv=Cg(oy),ov=Ag(Yg),av={};e(av,"__esModule",(function(){return Yy}),(function(e){return Yy=e})),e(av,"checkRevision",(function(){return Xy}),(function(e){return Xy=e})),e(av,"template",(function(){return Zy}),(function(e){return Zy=e})),e(av,"wrapProgram",(function(){return ev}),(function(e){return ev=e})),e(av,"resolvePartial",(function(){return tv}),(function(e){return tv=e})),e(av,"invokePartial",(function(){return nv}),(function(e){return nv=e})),e(av,"noop",(function(){return rv}),(function(e){return rv=e})),Yy=!0,Xy=function(e){var t=e&&e[0]||1,n=Og;if(t>=Dg&&t<=Og)return;if(t<Dg){var r=Rg[n],i=Rg[t];throw new lv.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new lv.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},Zy=function(e,t){if(!t)throw new lv.default("No environment passed to template");if(!e||!e.main)throw new lv.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!e||!(t in e))throw new lv.default('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||Fy(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,i=0;i<n;i++){if(null!=(e[i]&&r.lookupProperty(e[i],t)))return e[i][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:uv.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=uv.extend({},r,i.hash),i.ids&&(i.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,i);var s=uv.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),o=t.VM.invokePartial.call(this,n,r,s);if(null==o&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),o=i.partials[i.name](r,s)),null!=o){if(i.indent){for(var a=o.split("\n"),c=0,u=a.length;c<u&&(a[c]||c+1!==u);c++)a[c]=i.indent+a[c];o=a.join("\n")}return o}throw new lv.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,i){var s=this.programs[e],o=this.fn(e);return t||i||r||n?s=hv(this,e,o,t,n,r,i):s||(s=this.programs[e]=hv(this,e,o)),s},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=uv.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=n.data;i._setup(n),!n.partial&&e.useData&&(s=pv(t,s));var o=void 0,a=e.useBlockParams?[]:void 0;function c(t){return""+e.main(r,t,r.helpers,r.partials,s,a,o)}return e.useDepths&&(o=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(c=fv(e.main,c,r,n.depths||[],s,a))(t,n)}return i.isTop=!0,i._setup=function(i){if(i.partial)r.protoAccessControl=i.protoAccessControl,r.helpers=i.helpers,r.partials=i.partials,r.decorators=i.decorators,r.hooks=i.hooks;else{var s=uv.extend({},t.helpers,i.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return cv(e,(function(e){return uv.extend({lookupProperty:n},e)}))}(r,t)}))}(s,r),r.helpers=s,e.usePartial&&(r.partials=r.mergeIfNeeded(i.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=uv.extend({},t.decorators,i.decorators)),r.hooks={},r.protoAccessControl=Uy(i);var o=i.allowCallsToHelperMissing||n;ly(r,"helperMissing",o),ly(r,"blockHelperMissing",o)}},i._child=function(t,n,i,s){if(e.useBlockParams&&!i)throw new lv.default("must pass block params");if(e.useDepths&&!s)throw new lv.default("must pass parent depths");return hv(r,t,e[t],n,0,i,s)},i},ev=hv,tv=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},nv=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==dv&&function(){n.data=xg(n.data);var e=n.fn;i=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=xg(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=uv.extend({},n.partials,e.partials))}();void 0===e&&i&&(e=i);if(void 0===e)throw new lv.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},rv=dv;var cv,uv=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(Yg),lv=function(e){return e&&e.__esModule?e:{default:e}}(oy);function hv(e,t,n,r,i,s,o){function a(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=o;return!o||t==o[0]||t===e.nullContext&&null===o[0]||(a=[t].concat(o)),n(e,t,e.helpers,e.partials,i.data||r,s&&[i.blockParams].concat(s),a)}return(a=fv(n,a,e,o,r,s)).program=t,a.depth=o?o.length:0,a.blockParams=i||0,a}function dv(){return""}function pv(e,t){return t&&"root"in t||((t=t?xg(t):{}).root=e),t}function fv(e,t,n,r,i,s){if(e.decorator){var o={};t=e.decorator(t,o,n,r&&r[0],i,s,r),uv.extend(t,o)}return t}cv=function(e,t){if("function"!=typeof e)return e;return function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}};var mv=Ag(av),gv={__esModule:!0,default:function(e){var n=void 0!==t?t:window,r=n.Handlebars;e.noConflict=function(){return n.Handlebars===e&&(n.Handlebars=r),e}}},yv=Cg(gv=gv.default);function vv(){var e=new Wy.HandlebarsEnvironment;return ov.extend(e,Wy),e.SafeString=iv.default,e.Exception=sv.default,e.Utils=ov,e.escapeExpression=ov.escapeExpression,e.VM=mv,e.template=function(t){return mv.template(t,e)},e}var wv=vv();wv.create=vv,yv.default(wv),wv.default=wv,Tg.default=wv;var _v=Ig(Tg=Tg.default),bv={__esModule:!0},Ev={helpers:{helperExpression:function(e){return"SubExpression"===e.type||("MustacheStatement"===e.type||"BlockStatement"===e.type)&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return 1===e.parts.length&&!Ev.helpers.scopedId(e)&&!e.depth}}};bv.default=Ev;var Sv,kv,Iv,Tv=Ig(bv=bv.default);function Cv(e){return e&&e.__esModule?e:{default:e}}Sv=lw,kv=function(e,t){var n=lw(e,t);return new tw.default(t).accept(n)};var Av={__esModule:!0},Lv=function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(e,t,n,r,i,s,o){var a=s.length-1;switch(i){case 1:return s[a-1];case 2:this.$=r.prepareProgram(s[a]);break;case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=s[a];break;case 9:this.$={type:"CommentStatement",value:r.stripComment(s[a]),strip:r.stripFlags(s[a],s[a]),loc:r.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:s[a],value:s[a],loc:r.locInfo(this._$)};break;case 11:this.$=r.prepareRawBlock(s[a-2],s[a-1],s[a],this._$);break;case 12:this.$={path:s[a-3],params:s[a-2],hash:s[a-1]};break;case 13:this.$=r.prepareBlock(s[a-3],s[a-2],s[a-1],s[a],!1,this._$);break;case 14:this.$=r.prepareBlock(s[a-3],s[a-2],s[a-1],s[a],!0,this._$);break;case 15:this.$={open:s[a-5],path:s[a-4],params:s[a-3],hash:s[a-2],blockParams:s[a-1],strip:r.stripFlags(s[a-5],s[a])};break;case 16:case 17:this.$={path:s[a-4],params:s[a-3],hash:s[a-2],blockParams:s[a-1],strip:r.stripFlags(s[a-5],s[a])};break;case 18:this.$={strip:r.stripFlags(s[a-1],s[a-1]),program:s[a]};break;case 19:var c=r.prepareBlock(s[a-2],s[a-1],s[a],s[a],!1,this._$),u=r.prepareProgram([c],s[a-1].loc);u.chained=!0,this.$={strip:s[a-2].strip,program:u,chain:!0};break;case 21:this.$={path:s[a-1],strip:r.stripFlags(s[a-2],s[a])};break;case 22:case 23:this.$=r.prepareMustache(s[a-3],s[a-2],s[a-1],s[a-4],r.stripFlags(s[a-4],s[a]),this._$);break;case 24:this.$={type:"PartialStatement",name:s[a-3],params:s[a-2],hash:s[a-1],indent:"",strip:r.stripFlags(s[a-4],s[a]),loc:r.locInfo(this._$)};break;case 25:this.$=r.preparePartialBlock(s[a-2],s[a-1],s[a],this._$);break;case 26:this.$={path:s[a-3],params:s[a-2],hash:s[a-1],strip:r.stripFlags(s[a-4],s[a])};break;case 29:this.$={type:"SubExpression",path:s[a-3],params:s[a-2],hash:s[a-1],loc:r.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:s[a],loc:r.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:r.id(s[a-2]),value:s[a],loc:r.locInfo(this._$)};break;case 32:this.$=r.id(s[a-1]);break;case 35:this.$={type:"StringLiteral",value:s[a],original:s[a],loc:r.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(s[a]),original:Number(s[a]),loc:r.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===s[a],original:"true"===s[a],loc:r.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:r.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:r.locInfo(this._$)};break;case 42:this.$=r.preparePath(!0,s[a],this._$);break;case 43:this.$=r.preparePath(!1,s[a],this._$);break;case 44:s[a-2].push({part:r.id(s[a]),original:s[a],separator:s[a-1]}),this.$=s[a-2];break;case 45:this.$=[{part:r.id(s[a]),original:s[a]}];break;case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[];break;case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:s[a-1].push(s[a]);break;case 98:case 100:this.$=[s[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(e,t){throw new Error(e)},parse:function(e){var t=this,n=[0],r=[null],i=[],s=this.table,o="",a=0,c=0,u=0;this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;i.push(l);var h=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var d,p,f,m,g,y,v,w,_,b,E={};;){if(f=n[n.length-1],this.defaultActions[f]?m=this.defaultActions[f]:(null==d&&(b=void 0,"number"!=typeof(b=t.lexer.lex()||1)&&(b=t.symbols_[b]||b),d=b),m=s[f]&&s[f][d]),void 0===m||!m.length||!m[0]){var S="";if(!u){for(y in _=[],s[f])this.terminals_[y]&&y>2&&_.push("'"+this.terminals_[y]+"'");S=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+_.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==d?"end of input":"'"+(this.terminals_[d]||d)+"'"),this.parseError(S,{text:this.lexer.match,token:this.terminals_[d]||d,line:this.lexer.yylineno,loc:l,expected:_})}}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+d);switch(m[0]){case 1:n.push(d),r.push(this.lexer.yytext),i.push(this.lexer.yylloc),n.push(m[1]),d=null,p?(d=p,p=null):(c=this.lexer.yyleng,o=this.lexer.yytext,a=this.lexer.yylineno,l=this.lexer.yylloc,u>0&&u--);break;case 2:if(v=this.productions_[m[1]][1],E.$=r[r.length-v],E._$={first_line:i[i.length-(v||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(v||1)].first_column,last_column:i[i.length-1].last_column},h&&(E._$.range=[i[i.length-(v||1)].range[0],i[i.length-1].range[1]]),void 0!==(g=this.performAction.call(E,o,c,a,this.yy,m[1],r,i)))return g;v&&(n=n.slice(0,-1*v*2),r=r.slice(0,-1*v),i=i.slice(0,-1*v)),n.push(this.productions_[m[1]][0]),r.push(E.$),i.push(E._$),w=s[n[n.length-2]][n[n.length-1]],n.push(w);break;case 3:return!0}}return!0}},t={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t-1),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this},more:function(){return this._more=!0,this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF;var e,t,n,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),o=0;o<s.length&&(!(n=this._input.match(this.rules[s[o]]))||t&&!(n[0].length>t[0].length)||(t=n,r=o,this.options.flex));o++);return t?((i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,s[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e||void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return void 0!==e?e:this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(e){this.begin(e)},options:{},performAction:function(e,t,n,r){function i(e,n){return t.yytext=t.yytext.substring(e,t.yyleng-n+e)}switch(n){case 0:if("\\\\"===t.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===t.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),t.yytext)return 15;break;case 1:case 5:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(i(5,9),"END_RAW_BLOCK");case 6:case 22:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:case 23:return 48;case 21:this.unput(t.yytext),this.popState(),this.begin("com");break;case 24:return 73;case 25:case 26:case 41:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return t.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return t.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 42:return t.yytext=t.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}};function n(){this.yy={}}return e.lexer=t,n.prototype=e,e.Parser=n,new n}();Av.default=Lv;var Nv=Cv(Av=Av.default),Pv={};Pv.__esModule=!0;var Ov={};Ov.__esModule=!0;var Dv=function(e){return e&&e.__esModule?e:{default:e}}(oy);function Rv(){this.parents=[]}function Mv(e){this.acceptRequired(e,"path"),this.acceptArray(e.params),this.acceptKey(e,"hash")}function xv(e){Mv.call(this,e),this.acceptKey(e,"program"),this.acceptKey(e,"inverse")}function Uv(e){this.acceptRequired(e,"name"),this.acceptArray(e.params),this.acceptKey(e,"hash")}Rv.prototype={constructor:Rv,mutating:!1,acceptKey:function(e,t){var n=this.accept(e[t]);if(this.mutating){if(n&&!Rv.prototype[n.type])throw new Dv.default('Unexpected node type "'+n.type+'" found when accepting '+t+" on "+e.type);e[t]=n}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new Dv.default(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,n=e.length;t<n;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,n--)},accept:function(e){if(e){if(!this[e.type])throw new Dv.default("Unknown type: "+e.type,e);this.current&&this.parents.unshift(this.current),this.current=e;var t=this[e.type](e);return this.current=this.parents.shift(),!this.mutating||t?t:!1!==t?e:void 0}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:Mv,Decorator:Mv,BlockStatement:xv,DecoratorBlock:xv,PartialStatement:Uv,PartialBlockStatement:function(e){Uv.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:Mv,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}},Ov.default=Rv;var Fv=function(e){return e&&e.__esModule?e:{default:e}}(Ov=Ov.default);function Vv(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=e}function Bv(e,t,n){void 0===t&&(t=e.length);var r=e[t-1],i=e[t-2];return r?"ContentStatement"===r.type?(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original):void 0:n}function jv(e,t,n){void 0===t&&(t=-1);var r=e[t+1],i=e[t+2];return r?"ContentStatement"===r.type?(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original):void 0:n}function $v(e,t,n){var r=e[null==t?0:t+1];if(r&&"ContentStatement"===r.type&&(n||!r.rightStripped)){var i=r.value;r.value=r.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.value!==i}}function qv(e,t,n){var r=e[null==t?e.length-1:t-1];if(r&&"ContentStatement"===r.type&&(n||!r.leftStripped)){var i=r.value;return r.value=r.value.replace(n?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.value!==i,r.leftStripped}}Vv.prototype=new Fv.default,Vv.prototype.Program=function(e){var t=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var r=e.body,i=0,s=r.length;i<s;i++){var o=r[i],a=this.accept(o);if(a){var c=Bv(r,i,n),u=jv(r,i,n),l=a.openStandalone&&c,h=a.closeStandalone&&u,d=a.inlineStandalone&&c&&u;a.close&&$v(r,i,!0),a.open&&qv(r,i,!0),t&&d&&($v(r,i),qv(r,i)&&"PartialStatement"===o.type&&(o.indent=/([ \t]+$)/.exec(r[i-1].original)[1])),t&&l&&($v((o.program||o.inverse).body),qv(r,i)),t&&h&&($v(r,i),qv((o.inverse||o.program).body))}}return e},Vv.prototype.BlockStatement=Vv.prototype.DecoratorBlock=Vv.prototype.PartialBlockStatement=function(e){this.accept(e.program),this.accept(e.inverse);var t=e.program||e.inverse,n=e.program&&e.inverse,r=n,i=n;if(n&&n.chained)for(r=n.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var s={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:jv(t.body),closeStandalone:Bv((r||t).body)};if(e.openStrip.close&&$v(t.body,null,!0),n){var o=e.inverseStrip;o.open&&qv(t.body,null,!0),o.close&&$v(r.body,null,!0),e.closeStrip.open&&qv(i.body,null,!0),!this.options.ignoreStandalone&&Bv(t.body)&&jv(r.body)&&(qv(t.body),$v(r.body))}else e.closeStrip.open&&qv(t.body,null,!0);return s},Vv.prototype.Decorator=Vv.prototype.MustacheStatement=function(e){return e.strip},Vv.prototype.PartialStatement=Vv.prototype.CommentStatement=function(e){var t=e.strip||{};return{inlineStandalone:!0,open:t.open,close:t.close}},Pv.default=Vv;var Hv,zv,Gv,Kv,Wv,Qv,Jv,Yv,Xv,Zv,ew,tw=Cv(Pv=Pv.default),nw={};e(nw,"__esModule",(function(){return Hv}),(function(e){return Hv=e})),e(nw,"SourceLocation",(function(){return zv}),(function(e){return zv=e})),e(nw,"id",(function(){return Gv}),(function(e){return Gv=e})),e(nw,"stripFlags",(function(){return Kv}),(function(e){return Kv=e})),e(nw,"stripComment",(function(){return Wv}),(function(e){return Wv=e})),e(nw,"preparePath",(function(){return Qv}),(function(e){return Qv=e})),e(nw,"prepareMustache",(function(){return Jv}),(function(e){return Jv=e})),e(nw,"prepareRawBlock",(function(){return Yv}),(function(e){return Yv=e})),e(nw,"prepareBlock",(function(){return Xv}),(function(e){return Xv=e})),e(nw,"prepareProgram",(function(){return Zv}),(function(e){return Zv=e})),e(nw,"preparePartialBlock",(function(){return ew}),(function(e){return ew=e})),Hv=!0,zv=function(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}},Gv=function(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e},Kv=function(e,t){return{open:"~"===e.charAt(2),close:"~"===t.charAt(t.length-3)}},Wv=function(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},Qv=function(e,t,n){n=this.locInfo(n);for(var r=e?"@":"",i=[],s=0,o=0,a=t.length;o<a;o++){var c=t[o].part,u=t[o].original!==c;if(r+=(t[o].separator||"")+c,u||".."!==c&&"."!==c&&"this"!==c)i.push(c);else{if(i.length>0)throw new rw.default("Invalid path: "+r,{loc:n});".."===c&&s++}}return{type:"PathExpression",data:e,depth:s,parts:i,original:r,loc:n}},Jv=function(e,t,n,r,i,s){var o=r.charAt(3)||r.charAt(2),a="{"!==o&&"&"!==o;return{type:/\*/.test(r)?"Decorator":"MustacheStatement",path:e,params:t,hash:n,escaped:a,strip:i,loc:this.locInfo(s)}},Yv=function(e,t,n,r){iw(e,n),r=this.locInfo(r);var i={type:"Program",body:t,strip:{},loc:r};return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:r}},Xv=function(e,t,n,r,i,s){r&&r.path&&iw(e,r);var o=/\*/.test(e.open);t.blockParams=e.blockParams;var a=void 0,c=void 0;if(n){if(o)throw new rw.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=r.strip),c=n.strip,a=n.program}i&&(i=a,a=t,t=i);return{type:o?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:a,openStrip:e.strip,inverseStrip:c,closeStrip:r&&r.strip,loc:this.locInfo(s)}},Zv=function(e,t){if(!t&&e.length){var n=e[0].loc,r=e[e.length-1].loc;n&&r&&(t={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:r.end.line,column:r.end.column}})}return{type:"Program",body:e,strip:{},loc:t}},ew=function(e,t,n,r){return iw(e,n),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:n&&n.strip,loc:this.locInfo(r)}};var rw=function(e){return e&&e.__esModule?e:{default:e}}(oy);function iw(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var n={loc:e.path.loc};throw new rw.default(e.path.original+" doesn't match "+t,n)}}var sw=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(nw);Iv=Nv.default;var ow,aw,cw,uw={};function lw(e,t){return"Program"===e.type?e:(Nv.default.yy=uw,uw.locInfo=function(e){return new uw.SourceLocation(t&&t.srcName,e)},Nv.default.parse(e))}function hw(e){return e&&e.__esModule?e:{default:e}}jg(uw,sw),ow=mw,aw=function(e,t,n){if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new dw.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);"data"in(t=t||{})||(t.data=!0);t.compat&&(t.useDepths=!0);var r=n.parse(e,t),i=(new n.Compiler).compile(r,t);return(new n.JavaScriptCompiler).compile(i,t)},cw=function(e,t,n){void 0===t&&(t={});if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new dw.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);"data"in(t=jg({},t))||(t.data=!0);t.compat&&(t.useDepths=!0);var r=void 0;function i(){var r=n.parse(e,t),i=(new n.Compiler).compile(r,t),s=(new n.JavaScriptCompiler).compile(i,t,void 0,!0);return n.template(s)}function s(e,t){return r||(r=i()),r.call(this,e,t)}return s._setup=function(e){return r||(r=i()),r._setup(e)},s._child=function(e,t,n,s){return r||(r=i()),r._child(e,t,n,s)},s};var dw=hw(oy),pw=hw(bv),fw=[].slice;function mw(){}function gw(e,t){if(e===t)return!0;if(Jg(e)&&Jg(t)&&e.length===t.length){for(var n=0;n<e.length;n++)if(!gw(e[n],t[n]))return!1;return!0}}function yw(e){if(!e.path.parts){var t=e.path;e.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}mw.prototype={compiler:mw,equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t)return!1;for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||!gw(r.args,i.args))return!1}t=this.children.length;for(n=0;n<t;n++)if(!this.children[n].equals(e.children[n]))return!1;return!0},guid:0,compile:function(e,t){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds,t.blockParams=t.blockParams||[],t.knownHelpers=jg(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t.knownHelpers),this.accept(e)},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options),n=this.guid++;return this.usePartial=this.usePartial||t.usePartial,this.children[n]=t,this.useDepths=this.useDepths||t.useDepths,n},accept:function(e){if(!this[e.type])throw new dw.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var t=this[e.type](e);return this.sourceNode.shift(),t},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var t=e.body,n=t.length,r=0;r<n;r++)this.accept(t[r]);return this.options.blockParams.shift(),this.isSimple=1===n,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){yw(e);var t=e.program,n=e.inverse;t=t&&this.compileProgram(t),n=n&&this.compileProgram(n);var r=this.classifySexpr(e);"helper"===r?this.helperSexpr(e,t,n):"simple"===r?(this.simpleSexpr(e),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,t,n),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var t=e.program&&this.compileProgram(e.program),n=this.setupFullMustacheParams(e,t,void 0),r=e.path;this.useDecorators=!0,this.opcode("registerDecorator",n.length,r.original)},PartialStatement:function(e){this.usePartial=!0;var t=e.program;t&&(t=this.compileProgram(e.program));var n=e.params;if(n.length>1)throw new dw.default("Unsupported number of partial arguments: "+n.length,e);n.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):n.push({type:"PathExpression",parts:[],depth:0}));var r=e.name.original,i="SubExpression"===e.name.type;i&&this.accept(e.name),this.setupFullMustacheParams(e,t,void 0,!0);var s=e.indent||"";this.options.preventIndent&&s&&(this.opcode("appendContent",s),s=""),this.opcode("invokePartial",i,r,s),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){yw(e);var t=this.classifySexpr(e);"simple"===t?this.simpleSexpr(e):"helper"===t?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,t,n){var r=e.path,i=r.parts[0],s=null!=t||null!=n;this.opcode("getContext",r.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",n),r.strict=!0,this.accept(r),this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var t=e.path;t.strict=!0,this.accept(t),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,n){var r=this.setupFullMustacheParams(e,t,n),i=e.path,s=i.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",r.length,s);else{if(this.options.knownHelpersOnly)throw new dw.default("You specified knownHelpersOnly, but used the unknown helper "+s,e);i.strict=!0,i.falsy=!0,this.accept(i),this.opcode("invokeHelper",r.length,i.original,pw.default.helpers.simpleId(i))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0],n=pw.default.helpers.scopedId(e),r=!e.depth&&!n&&this.blockParamIndex(t);r?this.opcode("lookupBlockParam",r,e.parts):t?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,n):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var t=e.pairs,n=0,r=t.length;for(this.opcode("pushHash");n<r;n++)this.pushParam(t[n].value);for(;n--;)this.opcode("assignToHash",t[n].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:fw.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var t=pw.default.helpers.simpleId(e.path),n=t&&!!this.blockParamIndex(e.path.parts[0]),r=!n&&pw.default.helpers.helperExpression(e),i=!n&&(r||t);if(i&&!r){var s=e.path.parts[0],o=this.options;o.knownHelpers[s]?r=!0:o.knownHelpersOnly&&(i=!1)}return r?"helper":i?"ambiguous":"simple"},pushParams:function(e){for(var t=0,n=e.length;t<n;t++)this.pushParam(e[t])},pushParam:function(e){var t=null!=e.value?e.value:e.original||"";if(this.stringParams)t.replace&&(t=t.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",t,e.type),"SubExpression"===e.type&&this.accept(e);else{if(this.trackIds){var n=void 0;if(!e.parts||pw.default.helpers.scopedId(e)||e.depth||(n=this.blockParamIndex(e.parts[0])),n){var r=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",n,r)}else(t=e.original||t).replace&&(t=t.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,t)}this.accept(e)}},setupFullMustacheParams:function(e,t,n,r){var i=e.params;return this.pushParams(i),this.opcode("pushProgram",t),this.opcode("pushProgram",n),e.hash?this.accept(e.hash):this.opcode("emptyHash",r),i},blockParamIndex:function(e){for(var t=0,n=this.options.blockParams.length;t<n;t++){var r=this.options.blockParams[t],i=r&&$g(r,e);if(r&&i>=0)return[t,i]}}};var vw={};function ww(e){return e&&e.__esModule?e:{default:e}}vw.__esModule=!0;var _w=ww(oy),bw={__esModule:!0},Ew=void 0;try{if("function"!=typeof define||!define.amd){var Sw=s("hTBva");Ew=Sw.SourceNode}}catch(e){}function kw(e,t,n){if(Jg(e)){for(var r=[],i=0,s=e.length;i<s;i++)r.push(t.wrap(e[i],n));return r}return"boolean"==typeof e||"number"==typeof e?e+"":e}function Iw(e){this.srcFile=e,this.source=[]}Ew||((Ew=function(e,t,n,r){this.src="",r&&this.add(r)}).prototype={add:function(e){Jg(e)&&(e=e.join("")),this.src+=e},prepend:function(e){Jg(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),Iw.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,t){this.source.unshift(this.wrap(e,t))},push:function(e,t){this.source.push(this.wrap(e,t))},merge:function(){var e=this.empty();return this.each((function(t){e.add(["  ",t,"\n"])})),e},each:function(e){for(var t=0,n=this.source.length;t<n;t++)e(this.source[t])},empty:function(){var e=this.currentLocation||{start:{}};return new Ew(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return e instanceof Ew?e:(e=kw(e,this,t),new Ew(t.start.line,t.start.column,this.srcFile,e))},functionCall:function(e,t,n){return n=this.generateList(n),this.wrap([e,t?"."+t+"(":"(",n,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=this,n=[];Object.keys(e).forEach((function(r){var i=kw(e[r],t);"undefined"!==i&&n.push([t.quotedString(r),":",i])}));var r=this.generateList(n);return r.prepend("{"),r.add("}"),r},generateList:function(e){for(var t=this.empty(),n=0,r=e.length;n<r;n++)n&&t.add(","),t.add(kw(e[n],this));return t},generateArray:function(e){var t=this.generateList(e);return t.prepend("["),t.add("]"),t}},bw.default=Iw;var Tw=ww(bw=bw.default);function Cw(e){this.value=e}function Aw(){}Aw.prototype={nameLookup:function(e,t){return this.internalNameLookup(e,t)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){return[Og,Rg[Og]]},appendToBuffer:function(e,t,n){return Jg(e)||(e=[e]),e=this.source.wrap(e,t),this.environment.isSimple?["return ",e,";"]:n?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,t){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(t),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,t,n,r){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!r,this.name=this.environment.name,this.isChild=!!n,this.context=n||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams;var i=e.opcodes,s=void 0,o=void 0,a=void 0,c=void 0;for(a=0,c=i.length;a<c;a++)s=i[a],this.source.currentLocation=s.loc,o=o||s.loc,this[s.opcode].apply(this,s.args);if(this.source.currentLocation=o,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new _w.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),r?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var u=this.createFunctionContext(r);if(this.isChild)return u;var l={compiler:this.compilerInfo(),main:u};this.decorators&&(l.main_d=this.decorators,l.useDecorators=!0);var h=this.context,d=h.programs,p=h.decorators;for(a=0,c=d.length;a<c;a++)d[a]&&(l[a]=d[a],p[a]&&(l[a+"_d"]=p[a],l.useDecorators=!0));return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),r?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),t.srcName?(l=l.toStringWithSourceMap({file:t.destName})).map=l.map&&l.map.toString():l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new Tw.default(this.options.srcName),this.decorators=new Tw.default(this.options.srcName)},createFunctionContext:function(e){var t=this,n="",r=this.stackVars.concat(this.registers.list);r.length>0&&(n+=", "+r.join(", "));var i=0;Object.keys(this.aliases).forEach((function(e){var r=t.aliases[e];r.children&&r.referenceCount>1&&(n+=", alias"+ ++i+"="+e,r.children[0]="alias"+i)})),this.lookupPropertyFunctionIsUsed&&(n+=", "+this.lookupPropertyFunctionVarDeclaration());var s=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&s.push("blockParams"),this.useDepths&&s.push("depths");var o=this.mergeSource(n);return e?(s.push(o),Function.apply(this,s)):this.source.wrap(["function(",s.join(","),") {\n  ",o,"}"])},mergeSource:function(e){var t=this.environment.isSimple,n=!this.forceBuffer,r=void 0,i=void 0,s=void 0,o=void 0;return this.source.each((function(e){e.appendToBuffer?(s?e.prepend("  + "):s=e,o=e):(s&&(i?s.prepend("buffer += "):r=!0,o.add(";"),s=o=void 0),i=!0,t||(n=!1))})),n?s?(s.prepend("return "),o.add(";")):i||this.source.push('return "";'):(e+=", buffer = "+(r?"":this.initializeBuffer()),s?(s.prepend("return buffer + "),o.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(r?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(e){var t=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs(e,0,n);var r=this.popStack();n.splice(1,0,r),this.push(this.source.functionCall(t,"call",n))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),t=[this.contextName(0)];this.setupHelperArgs("",0,t,!0),this.flushInline();var n=this.topStack();t.splice(1,0,n),this.pushSource(["if (!",this.lastHelper,") { ",n," = ",this.source.functionCall(e,"call",t),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack((function(e){return[" != null ? ",e,' : ""']})),this.pushSource(this.appendToBuffer(this.popStack()));else{var e=this.popStack();this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,n,r){var i=0;r||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(e[i++])),this.resolvePath("context",e,i,t,n)},lookupBlockParam:function(e,t){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",t,1)},lookupData:function(e,t,n){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",t,0,!0,n)},resolvePath:function(e,t,n,r,i){var s=this;if(this.options.strict||this.options.assumeObjects)this.push(function(e,t,n,r){var i=t.popStack(),s=0,o=n.length;e&&o--;for(;s<o;s++)i=t.nameLookup(i,n[s],r);return e?[t.aliasable("container.strict"),"(",i,", ",t.quotedString(n[s]),", ",JSON.stringify(t.source.currentLocation)," )"]:i}(this.options.strict&&i,this,t,e));else for(var o=t.length;n<o;n++)this.replaceStack((function(i){var o=s.nameLookup(i,t[n],e);return r?[" && ",o]:[" != null ? ",o," : ",i]}))},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),"SubExpression"!==t&&("string"==typeof e?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){null!=e?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,t){var n=this.nameLookup("decorators",t,"decorator"),r=this.setupHelperArgs(t,e);this.decorators.push(["fn = ",this.decorators.functionCall(n,"",["fn","props","container",r])," || fn;"])},invokeHelper:function(e,t,n){var r=this.popStack(),i=this.setupHelper(e,t),s=[];n&&s.push(i.name),s.push(r),this.options.strict||s.push(this.aliasable("container.hooks.helperMissing"));var o=["(",this.itemsSeparatedBy(s,"||"),")"],a=this.source.functionCall(o,"call",i.callParams);this.push(a)},itemsSeparatedBy:function(e,t){var n=[];n.push(e[0]);for(var r=1;r<e.length;r++)n.push(t,e[r]);return n},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(this.source.functionCall(n.name,"call",n.callParams))},invokeAmbiguous:function(e,t){this.useRegister("helper");var n=this.popStack();this.emptyHash();var r=this.setupHelper(0,e,t),i=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",e,"helper")," || ",n,")"];this.options.strict||(i[0]="(helper = ",i.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",i,r.paramsInit?["),(",r.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",r.callParams)," : helper))"])},invokePartial:function(e,t,n){var r=[],i=this.setupParams(t,1,r);e&&(t=this.popStack(),delete i.name),n&&(i.indent=JSON.stringify(n)),i.helpers="helpers",i.partials="partials",i.decorators="container.decorators",e?r.unshift(t):r.unshift(this.nameLookup("partials",t,"partial")),this.options.compat&&(i.depths="depths"),i=this.objectLiteral(i),r.push(i),this.push(this.source.functionCall("container.invokePartial","",r))},assignToHash:function(e){var t=this.popStack(),n=void 0,r=void 0,i=void 0;this.trackIds&&(i=this.popStack()),this.stringParams&&(r=this.popStack(),n=this.popStack());var s=this.hash;n&&(s.contexts[e]=n),r&&(s.types[e]=r),i&&(s.ids[e]=i),s.values[e]=t},pushId:function(e,t,n){"BlockParam"===e?this.pushStackLiteral("blockParams["+t[0]+"].path["+t[1]+"]"+(n?" + "+JSON.stringify("."+n):"")):"PathExpression"===e?this.pushString(t):"SubExpression"===e?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:Aw,compileChildren:function(e,t){for(var n=e.children,r=void 0,i=void 0,s=0,o=n.length;s<o;s++){r=n[s],i=new this.compiler;var a=this.matchExistingProgram(r);if(null==a){this.context.programs.push("");var c=this.context.programs.length;r.index=c,r.name="program"+c,this.context.programs[c]=i.compile(r,t,this.context,!this.precompile),this.context.decorators[c]=i.decorators,this.context.environments[c]=r,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams,r.useDepths=this.useDepths,r.useBlockParams=this.useBlockParams}else r.index=a.index,r.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e))return r}},programExpression:function(e){var t=this.environment.children[e],n=[t.index,"data",t.blockParams];return(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths"),"container.program("+n.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof Cw||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new Cw(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var t=["("],n=void 0,r=void 0,i=void 0;if(!this.isInline())throw new _w.default("replaceStack on non-inline");var s=this.popStack(!0);if(s instanceof Cw)t=["(",n=[s.value]],i=!0;else{r=!0;var o=this.incrStack();t=["((",this.push(o)," = ",s,")"],n=this.topStack()}var a=e.call(this,n);i||this.popStack(),r&&this.stackSlot--,this.push(t.concat(a,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof Cw)this.compileStack.push(r);else{var i=this.incrStack();this.pushSource([i," = ",r,";"]),this.compileStack.push(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof Cw)return n.value;if(!t){if(!this.stackSlot)throw new _w.default("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1];return t instanceof Cw?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var t=this.aliases[e];return t?(t.referenceCount++,t):((t=this.aliases[e]=this.source.wrap(e)).aliasable=!0,t.referenceCount=1,t)},setupHelper:function(e,t,n){var r=[];return{params:r,paramsInit:this.setupHelperArgs(t,e,r,n),name:this.nameLookup("helpers",t,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(r)}},setupParams:function(e,t,n){var r={},i=[],s=[],o=[],a=!n,c=void 0;a&&(n=[]),r.name=this.quotedString(e),r.hash=this.popStack(),this.trackIds&&(r.hashIds=this.popStack()),this.stringParams&&(r.hashTypes=this.popStack(),r.hashContexts=this.popStack());var u=this.popStack(),l=this.popStack();(l||u)&&(r.fn=l||"container.noop",r.inverse=u||"container.noop");for(var h=t;h--;)c=this.popStack(),n[h]=c,this.trackIds&&(o[h]=this.popStack()),this.stringParams&&(s[h]=this.popStack(),i[h]=this.popStack());return a&&(r.args=this.source.generateArray(n)),this.trackIds&&(r.ids=this.source.generateArray(o)),this.stringParams&&(r.types=this.source.generateArray(s),r.contexts=this.source.generateArray(i)),this.options.data&&(r.data="data"),this.useBlockParams&&(r.blockParams="blockParams"),r},setupHelperArgs:function(e,t,n,r){var i=this.setupParams(e,t,n);return i.loc=JSON.stringify(this.source.currentLocation),i=this.objectLiteral(i),r?(this.useRegister("options"),n.push("options"),["options=",i]):n?(n.push(i),""):i}},function(){for(var e="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),t=Aw.RESERVED_WORDS={},n=0,r=e.length;n<r;n++)t[e[n]]=!0}(),Aw.isValidJavaScriptVariableName=function(e){return!Aw.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)},vw.default=Aw;var Lw=Ig(vw=vw.default),Nw=Ig(Ov),Pw=Ig(gv),Ow=_v.default.create;function Dw(){var e=Ow();return e.compile=function(t,n){return cw(t,n,e)},e.precompile=function(t,n){return aw(t,n,e)},e.AST=Tv.default,e.Compiler=ow,e.JavaScriptCompiler=Lw.default,e.Parser=Iv,e.parse=kv,e.parseWithoutProcessing=Sv,e}var Rw=Dw();Rw.create=Dw,Pw.default(Rw),Rw.Visitor=Nw.default,Rw.default=Rw,kg.default=Rw;var Mw,xw,Uw=(kg=kg.default).default;Mw=function(e){return(new Vw).accept(e)},xw=Vw;var Fw=function(e){return e&&e.__esModule?e:{default:e}}(Ov);function Vw(){this.padding=0}Vw.prototype=new Fw.default,Vw.prototype.pad=function(e){for(var t="",n=0,r=this.padding;n<r;n++)t+="  ";return t+=e+"\n"},Vw.prototype.Program=function(e){var t="",n=e.body,r=void 0,i=void 0;if(e.blockParams){var s="BLOCK PARAMS: [";for(r=0,i=e.blockParams.length;r<i;r++)s+=" "+e.blockParams[r];s+=" ]",t+=this.pad(s)}for(r=0,i=n.length;r<i;r++)t+=this.accept(n[r]);return this.padding--,t},Vw.prototype.MustacheStatement=function(e){return this.pad("{{ "+this.SubExpression(e)+" }}")},Vw.prototype.Decorator=function(e){return this.pad("{{ DIRECTIVE "+this.SubExpression(e)+" }}")},Vw.prototype.BlockStatement=Vw.prototype.DecoratorBlock=function(e){var t="";return t+=this.pad(("DecoratorBlock"===e.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,t+=this.pad(this.SubExpression(e)),e.program&&(t+=this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t+=this.pad("{{^}}"),this.padding++,t+=this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t},Vw.prototype.PartialStatement=function(e){var t="PARTIAL:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")},Vw.prototype.PartialBlockStatement=function(e){var t="PARTIAL BLOCK:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),t+=" "+this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--,this.pad("{{> "+t+" }}")},Vw.prototype.ContentStatement=function(e){return this.pad("CONTENT[ '"+e.value+"' ]")},Vw.prototype.CommentStatement=function(e){return this.pad("{{! '"+e.value+"' }}")},Vw.prototype.SubExpression=function(e){for(var t,n=e.params,r=[],i=0,s=n.length;i<s;i++)r.push(this.accept(n[i]));return n="["+r.join(", ")+"]",t=e.hash?" "+this.accept(e.hash):"",this.accept(e.path)+" "+n+t},Vw.prototype.PathExpression=function(e){var t=e.parts.join("/");return(e.data?"@":"")+"PATH:"+t},Vw.prototype.StringLiteral=function(e){return'"'+e.value+'"'},Vw.prototype.NumberLiteral=function(e){return"NUMBER{"+e.value+"}"},Vw.prototype.BooleanLiteral=function(e){return"BOOLEAN{"+e.value+"}"},Vw.prototype.UndefinedLiteral=function(){return"UNDEFINED"},Vw.prototype.NullLiteral=function(){return"NULL"},Vw.prototype.Hash=function(e){for(var t=e.pairs,n=[],r=0,i=t.length;r<i;r++)n.push(this.accept(t[r]));return"HASH{"+n.join(", ")+"}"},Vw.prototype.HashPair=function(e){return e.key+"="+this.accept(e.value)},Uw.PrintVisitor=xw,Uw.print=Mw;var Bw=n(Sg=Uw).template({1:function(e,t,n,r,i){var s,o=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,c="function",u=e.escapeExpression,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li\n    class='film-card'\n    data-overview='"+u(typeof(s=null!=(s=l(n,"overview")||(null!=t?l(t,"overview"):t))?s:a)===c?s.call(o,{name:"overview",hash:{},data:i,loc:{start:{line:4,column:19},end:{line:4,column:31}}}):s)+"'\n    data-title='"+u(typeof(s=null!=(s=l(n,"title")||(null!=t?l(t,"title"):t))?s:a)===c?s.call(o,{name:"title",hash:{},data:i,loc:{start:{line:5,column:16},end:{line:5,column:25}}}):s)+"'\n    data-name='"+u(typeof(s=null!=(s=l(n,"name")||(null!=t?l(t,"name"):t))?s:a)===c?s.call(o,{name:"name",hash:{},data:i,loc:{start:{line:6,column:15},end:{line:6,column:23}}}):s)+"'\n    data-vote='"+u(typeof(s=null!=(s=l(n,"vote_average")||(null!=t?l(t,"vote_average"):t))?s:a)===c?s.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:7,column:15},end:{line:7,column:31}}}):s)+"'\n    data-popularity='"+u(typeof(s=null!=(s=l(n,"popularity")||(null!=t?l(t,"popularity"):t))?s:a)===c?s.call(o,{name:"popularity",hash:{},data:i,loc:{start:{line:8,column:21},end:{line:8,column:35}}}):s)+"'\n    data-genre='"+u(typeof(s=null!=(s=l(n,"genre_ids")||(null!=t?l(t,"genre_ids"):t))?s:a)===c?s.call(o,{name:"genre_ids",hash:{},data:i,loc:{start:{line:9,column:16},end:{line:9,column:29}}}):s)+"'\n    data-src='https://image.tmdb.org/t/p/w500"+u(typeof(s=null!=(s=l(n,"poster_path")||(null!=t?l(t,"poster_path"):t))?s:a)===c?s.call(o,{name:"poster_path",hash:{},data:i,loc:{start:{line:10,column:45},end:{line:10,column:60}}}):s)+"'\n    data-votes='"+u(typeof(s=null!=(s=l(n,"vote_count")||(null!=t?l(t,"vote_count"):t))?s:a)===c?s.call(o,{name:"vote_count",hash:{},data:i,loc:{start:{line:11,column:16},end:{line:11,column:30}}}):s)+"'\n    data-id='"+u(typeof(s=null!=(s=l(n,"id")||(null!=t?l(t,"id"):t))?s:a)===c?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:12,column:13},end:{line:12,column:19}}}):s)+"'\n    data-released="+u(typeof(s=null!=(s=l(n,"release_date")||(null!=t?l(t,"release_date"):t))?s:a)===c?s.call(o,{name:"release_date",hash:{},data:i,loc:{start:{line:13,column:18},end:{line:13,column:34}}}):s)+"\n  >\n    <div>\n      <div class='film-card__img_container'>\n        <img\n          class='film-card__img'\n          src='https://image.tmdb.org/t/p/w500"+u(typeof(s=null!=(s=l(n,"poster_path")||(null!=t?l(t,"poster_path"):t))?s:a)===c?s.call(o,{name:"poster_path",hash:{},data:i,loc:{start:{line:19,column:46},end:{line:19,column:61}}}):s)+"'\n          alt='"+u(typeof(s=null!=(s=l(n,"backdrop_path")||(null!=t?l(t,"backdrop_path"):t))?s:a)===c?s.call(o,{name:"backdrop_path",hash:{},data:i,loc:{start:{line:20,column:15},end:{line:20,column:32}}}):s)+"'\n          width='100%'\n          data-id='"+u(typeof(s=null!=(s=l(n,"id")||(null!=t?l(t,"id"):t))?s:a)===c?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:22,column:19},end:{line:22,column:25}}}):s)+"'\n        />\n        <span class='film-card__vote'>"+u(typeof(s=null!=(s=l(n,"vote_average")||(null!=t?l(t,"vote_average"):t))?s:a)===c?s.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:24,column:38},end:{line:24,column:54}}}):s)+"</span>\n        <span class='film-card__vote-count'>Vote Count: "+u(typeof(s=null!=(s=l(n,"vote_count")||(null!=t?l(t,"vote_count"):t))?s:a)===c?s.call(o,{name:"vote_count",hash:{},data:i,loc:{start:{line:25,column:56},end:{line:25,column:70}}}):s)+"</span>\n      </div>\n      <h2 class='film-card__title'>"+u(typeof(s=null!=(s=l(n,"title")||(null!=t?l(t,"title"):t))?s:a)===c?s.call(o,{name:"title",hash:{},data:i,loc:{start:{line:27,column:35},end:{line:27,column:44}}}):s)+" "+u(typeof(s=null!=(s=l(n,"name")||(null!=t?l(t,"name"):t))?s:a)===c?s.call(o,{name:"name",hash:{},data:i,loc:{start:{line:27,column:45},end:{line:27,column:53}}}):s)+"</h2>\n      <p class='film-card__text'>\n        <span class='film-card__genres'>"+u(typeof(s=null!=(s=l(n,"genre_ids")||(null!=t?l(t,"genre_ids"):t))?s:a)===c?s.call(o,{name:"genre_ids",hash:{},data:i,loc:{start:{line:29,column:40},end:{line:29,column:53}}}):s)+"</span>\n        |\n        <span\n          class='film-card__release'\n        >"+u(typeof(s=null!=(s=l(n,"release_date")||(null!=t?l(t,"release_date"):t))?s:a)===c?s.call(o,{name:"release_date",hash:{},data:i,loc:{start:{line:33,column:9},end:{line:33,column:25}}}):s)+u(typeof(s=null!=(s=l(n,"first_air_date")||(null!=t?l(t,"first_air_date"):t))?s:a)===c?s.call(o,{name:"first_air_date",hash:{},data:i,loc:{start:{line:33,column:25},end:{line:33,column:43}}}):s)+"</span>\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var s,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(s=o(n,"each").call(null!=t?t:e.nullContext||{},null!=t?o(t,"results"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:37,column:9}}}))?s:""},useData:!0});const jw=document.querySelector(".collection");function $w(e){jw.innerHTML="",fg.fetchTrendFilms(e).then((e=>{var t;t=e,jw.insertAdjacentHTML("beforeend",Bw(t)),Eg(),bg(localStorage.getItem("theme")),u_(e.total_pages)}))}$w(fg.page);var qw=$w;const Hw=document.querySelector("body"),zw=document.querySelector(".input-genre"),Gw=document.querySelector(".genres-list"),Kw=document.querySelector(".collection"),Ww=document.querySelector(".apply-filter"),Qw=document.querySelector(".reset-filter");let Jw=[],Yw=[];function Xw(e){Kw.innerHTML="";let t=Jw.join(",");Gm(),fg.fetchFilmsByGenre(t,e).then((e=>{var t;t=e,Kw.insertAdjacentHTML("beforeend",Bw(t)),Eg(),bg(localStorage.getItem("theme")),Gw.style.display="none",u_(e.total_pages)})),Km()}fg.fetchGenres().then((e=>e.map((e=>Gw.insertAdjacentHTML("beforeend",`<li class="genres-item" id="${e.id}">${e.name}</li>`)))));function Zw(e){for(let e=0;e<Gw.children.length;e++)Gw.children[e].classList.contains("genres-item_active")&&Gw.children[e].classList.remove("genres-item_active");zw.value="",Jw=[],Yw=[]}Hw.addEventListener("click",(function(e){e.target!==Gw&&e.target!==zw&&(Gw.style.display="none")})),zw.addEventListener("click",(function(e){e.target===zw&&(Gw.style.display="block")})),Gw.addEventListener("click",(e=>{if(e.target.classList.contains("genres-item_active")){e.target.classList.remove("genres-item_active");let t=Yw.indexOf(e.target.innerHTML);Yw.splice(t,1),zw.value=Yw}else e.target.classList.add("genres-item_active"),Jw.push(e.target.id),Yw.push(e.target.innerHTML),zw.value=Yw;return Jw})),Ww.addEventListener("click",(function(){Xw(fg.page=1)})),Qw.addEventListener("click",Zw);var e_={applyFilterSubmit:Xw,deleteGenres:Zw};const t_=document.querySelector(".search-input"),n_=document.querySelector(".collection"),r_=document.querySelector(".search_icon");function i_(){""!==t_.value.trim()?(Gm(),fg.searchQuery(t_.value.trim()),fg.page=1,s_(1),t_.value="",Km(),e_.deleteGenres()):t_.value=""}function s_(e){n_.innerHTML="",fg.fetchSearchFilms(e).then((e=>{var t;t=e,n_.insertAdjacentHTML("beforeend",Bw(t)),Eg(),bg(localStorage.getItem("theme")),n_.hasChildNodes()?document.querySelector("#search_error").innerHTML="":document.querySelector("#search_error").innerHTML="Search result not successful. Enter the correct movie!",u_(e.total_pages)}))}t_.addEventListener("keypress",(function(e){"Enter"===e.key&&i_()})),r_.addEventListener("click",i_),console.log(s_);var o_=s_;function a_(e){switch(e[0].toString()){case"trendFilms":qw(fg.page);break;case"searchFilms":o_(fg.page);break;case"byGenreFilms":e_.applyFilterSubmit(fg.page);break;case"discoverFilms":fg.fetchDiscover()}}function c_(e){e.preventDefault(),document.querySelector(".collection").innerHTML="";let t=Number(this.getAttribute("data-num"));fg.page=t,console.log(fg.page),a_(fg.fetchType)}document.querySelector("#next-page").addEventListener("click",(function(e){e.preventDefault(),fg.page++,a_(fg.fetchType)})),document.querySelector("#prev-page").addEventListener("click",(function(e){e.preventDefault(),fg.page--,a_(fg.fetchType)}));var u_=function(e){console.log(e);let t=e;toti=e,document.querySelector(".pagination").classList.contains("created")||function(e){const t=document.querySelector("#page_numbers");console.dir(e);let n=document.createElement("li"),r=document.createElement("li");n.classList.add("page-item"),r.classList.add("page-item"),n.innerHTML='<a class="page-link page_num" href="#" data-num="1">1</a>',r.innerHTML='<a class="page-link start_ellipsis">...</a>',t.appendChild(n),t.appendChild(r),console.log(e);for(let n=2;n<e;n++){let e=document.createElement("li");e.classList.add("page-item");let r=`<a class="page-link page_num" href="#" data-num="${n}">${n}</a>`;e.innerHTML=r,t.appendChild(e)}let i=document.createElement("li"),s=document.createElement("li");i.classList.add("page-item"),s.classList.add("page-item"),i.innerHTML='<a class="page-link end_ellipsis">...</a>',s.innerHTML=`<a class="page-link page_num" href="#" data-num="${toti}">${toti}</a>`,t.appendChild(i),t.appendChild(s),document.querySelector(".pagination").classList.add("created")}(t),function(e,t){const n=document.querySelectorAll(".page_num"),r=document.querySelector(".start_ellipsis"),i=document.querySelector(".end_ellipsis");console.log(t);for(let e=0;e<t;e++)n[e].style.display="none",n[e].classList.remove("active_page"),n[e].addEventListener("click",c_);function s(){if(window.innerWidth>400){n[e].style.display="unset",n[t-1].style.display="unset";for(let e=0;e<3;e++){fg.page>=t-3?(i.style.display="none",r.style.display="unset"):fg.page<=3?(r.style.display="none",i.style.display="unset"):(r.style.display="unset",i.style.display="unset");try{n[fg.page-1-e].style.display="unset"}catch(e){}try{n[fg.page-1+e].style.display="unset"}catch(e){}}}if(window.innerWidth<=400){r.style.display="none",i.style.display="none",n[t-1].style.display="none",n[e].style.display="none";for(let e=0;e<3;e++){try{n[fg.page-1-e].style.display="unset"}catch(e){}try{n[fg.page-1+e].style.display="unset"}catch(e){}}}}n[fg.page-1].style.display="unset",n[fg.page-1].classList.add("active_page"),window.addEventListener("load",s())}(0,t)};const l_=document.querySelector(".descending"),h_=document.querySelector(".ascending"),d_=document.querySelector(".sort-title"),p_=document.querySelector(".sort-votes"),f_=document.querySelector(".sort-popularuty"),m_=document.querySelector(".sort-votes-count"),g_=document.querySelector(".sort-release"),y_=document.querySelector(".sort-input"),v_=document.querySelector(".sort-list"),w_=document.querySelector(".collection"),__=document.querySelector("body");let b_="desc";function E_(e){switch(Gm(),"ascending"===e.target.classList.value?(console.log(e.target.classList),b_="asc",h_.style.backgroundColor="orangered",l_.style.backgroundColor=""):"descending"===e.target.classList.value&&(console.log(e.target.classList),b_="desc",l_.style.backgroundColor="orangered",h_.style.backgroundColor=""),y_.value){case"Title":S_();break;case"Popularity":I_();break;case"Votes":k_();break;case"Votes-count":T_();break;case"Release-data":C_();break;case"":setTimeout((()=>{y_.classList.remove("active")}),1e3),y_.classList.add("active");break;default:return}}function S_(e){Gm(),y_.value="Title",fg.fetchDiscover(`original_title.${b_}`,fg.page).then((e=>{w_.innerHTML="",w_.insertAdjacentHTML("beforeend",Bw(e)),Eg(),Km(),u_(e.total_pages)}))}function k_(e){Gm(),y_.value="Votes",fg.fetchDiscover(`vote_average.${b_}`).then((e=>{w_.innerHTML="",w_.insertAdjacentHTML("beforeend",Bw(e)),Eg(),Km(),u_(e.total_pages)}))}function I_(e){Gm(),y_.value="Popularity",fg.fetchDiscover(`popularity.${b_}`).then((e=>{w_.innerHTML="",w_.insertAdjacentHTML("beforeend",Bw(e)),Eg(),Km(),u_(e.total_pages)}))}function T_(e){Gm(),y_.value="Votes-count",fg.fetchDiscover(`vote_count.${b_}`).then((e=>{w_.innerHTML="",w_.insertAdjacentHTML("beforeend",Bw(e)),Eg(),Km(),u_(e.total_pages)}))}function C_(e){Gm(),y_.value="Release-data",fg.fetchDiscover(`release_date.${b_}`).then((e=>{w_.innerHTML="",w_.insertAdjacentHTML("beforeend",Bw(e)),Eg(),Km(),u_(e.total_pages)}))}y_.addEventListener("click",(function(e){e.target===y_&&(v_.style.display="block")})),__.addEventListener("click",(function(e){e.target!==v_&&e.target!==y_&&(v_.style.display="none")})),h_.addEventListener("click",E_),l_.addEventListener("click",E_),d_.addEventListener("click",S_),p_.addEventListener("click",k_),f_.addEventListener("click",I_),m_.addEventListener("click",T_),g_.addEventListener("click",C_);var A_=n(Sg).template({1:function(e,t,n,r,i){var s,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression("function"==typeof(s=null!=(s=o(n,"name")||(null!=t?o(t,"name"):t))?s:e.hooks.helperMissing)?s.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i,loc:{start:{line:18,column:48},end:{line:18,column:56}}}):s)+", "},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var s,o,a=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,u="function",l=e.escapeExpression,h=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<div class='img-container'>\n  <img src='https://image.tmdb.org/t/p/w500"+l(typeof(o=null!=(o=h(n,"poster_path")||(null!=t?h(t,"poster_path"):t))?o:c)===u?o.call(a,{name:"poster_path",hash:{},data:i,loc:{start:{line:2,column:43},end:{line:2,column:58}}}):o)+"' />\n</div>\n<div class='text-container'>\n  <h2 class='film-header'>"+l(typeof(o=null!=(o=h(n,"title")||(null!=t?h(t,"title"):t))?o:c)===u?o.call(a,{name:"title",hash:{},data:i,loc:{start:{line:5,column:26},end:{line:5,column:35}}}):o)+" "+l(typeof(o=null!=(o=h(n,"name")||(null!=t?h(t,"name"):t))?o:c)===u?o.call(a,{name:"name",hash:{},data:i,loc:{start:{line:5,column:36},end:{line:5,column:44}}}):o)+"</h2>\n  <div class='film_info'>\n    <div class='film__left_info'>\n      <span>Vote / Votes</span>\n      <span>Popularity</span>\n      <span>Original Title</span>\n      <span>Genre</span>\n    </div>\n    <div class='film__right_info'>\n      <p class='vote'><span class='vote-average'>"+l(typeof(o=null!=(o=h(n,"vote_average")||(null!=t?h(t,"vote_average"):t))?o:c)===u?o.call(a,{name:"vote_average",hash:{},data:i,loc:{start:{line:14,column:49},end:{line:14,column:65}}}):o)+"</span>/\n        "+l(typeof(o=null!=(o=h(n,"vote_count")||(null!=t?h(t,"vote_count"):t))?o:c)===u?o.call(a,{name:"vote_count",hash:{},data:i,loc:{start:{line:15,column:8},end:{line:15,column:22}}}):o)+"</p>\n      <span class='popularity'>"+l(typeof(o=null!=(o=h(n,"popularity")||(null!=t?h(t,"popularity"):t))?o:c)===u?o.call(a,{name:"popularity",hash:{},data:i,loc:{start:{line:16,column:31},end:{line:16,column:45}}}):o)+"</span>\n      <span>"+l(typeof(o=null!=(o=h(n,"original_title")||(null!=t?h(t,"original_title"):t))?o:c)===u?o.call(a,{name:"original_title",hash:{},data:i,loc:{start:{line:17,column:12},end:{line:17,column:30}}}):o)+"</span>\n      <span class='modal-genre'>"+(null!=(s=h(n,"each").call(a,null!=t?h(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:18,column:32},end:{line:18,column:67}}}))?s:"")+"</span>\n    </div>\n  </div>\n  <p class='about'>About</p>\n  <p class='about-info'>"+l(typeof(o=null!=(o=h(n,"overview")||(null!=t?h(t,"overview"):t))?o:c)===u?o.call(a,{name:"overview",hash:{},data:i,loc:{start:{line:22,column:24},end:{line:22,column:36}}}):o)+"</p>\n  <div class='buttons'>\n    <button type='button' class='button-watched'><p>add to watched</p></button>\n    <button type='button' class='button-queue'><p>add to queue</p></button>\n  </div>\n</div>"},useData:!0});function L_(){const e=document.getElementsByClassName("vote-average"),t=document.querySelector(".popularity"),n=document.querySelector(".modal-genre"),r=document.querySelector(".vote");n.innerHTML=n.innerHTML.replace(/,\s*$/,""),t.innerHTML=Math.trunc(10*t.innerHTML)/10;for(let t=0;t<e.length;t++){let n=String(e[t].innerHTML.slice(0,3));"0"===n?(r.style.color="red",r.innerHTML="Sorry, this movie has no ratings yet"):e[t].innerHTML=n%1!=0?Number(n):Number(n)+".0"}}document.querySelector(".main");const N_=document.querySelector(".collection"),P_=document.querySelector(".backdrop"),O_=document.querySelector(".modal__content"),D_=document.querySelector(".film_modal"),R_=document.querySelector(".close-svg"),M_=document.querySelector("#blackscreen");function x_(e){O_.insertAdjacentHTML("beforeend",A_(e)),L_()}function U_(e){P_.classList.add("is-hidden"),$("#blackscreen").fadeOut(200),O_.innerHTML=""}document.addEventListener("keydown",(e=>{"Escape"===e.key&&U_()})),D_.addEventListener("click",(function(e){(e.target.contains(R_)||e.target.contains(R_.children[0]))&&U_()})),M_.addEventListener("click",(function(e){P_!==e.target&&U_()})),N_.addEventListener("click",(async function(e){if(e.preventDefault(),e.target.classList.contains("film-card__img")){P_.classList.remove("is-hidden"),$("#blackscreen").fadeIn("slow");const n=e.target.dataset.id;await fg.fetchFilmById(n).then(x_);const r=document.querySelector(".button-queue"),i=document.querySelector(".button-watched");async function t(e){const t=sessionStorage.getItem("uid");if(null==t||null==t)return void await zm("error","You must be logged in!");const r=t.substring(0,8)+"."+n;xm(Xf(jm,`${e}`,r),{filmId:n,userId:t}).then((()=>{zm("success",`Film was successfully added to ${e}!`)})).catch((e=>{zm("error",e.message)}))}r.addEventListener("click",(async e=>{e.preventDefault(),t("queue")})),i.addEventListener("click",(async e=>{e.preventDefault(),t("watched")}))}}));const F_=document.querySelector("#registerForm");F_.addEventListener("submit",(e=>{e.preventDefault();document.querySelector("#registerUsername").value;const t=document.querySelector("#registerEmail").value,n=document.querySelector("#registerPassword").value,r=document.querySelector("#registerRepeatPassword").value,i=document.querySelector("#registerError");n!==r?(i.style.display="block",i.innerHTML="Your password and confirmation password do not match."):Mn($m,t,n).then((e=>{Un($m),document.querySelector("#login").click(),F_.reset(),i.removeAttribute("style")})).catch((e=>{i.style.display="block",i.innerHTML=e.message}))}));const V_=document.querySelector("#loginForm"),B_=document.querySelector("#loginError");V_.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("#loginEmail").value,n=document.querySelector("#loginPassword").value;xn($m,t,n).then((e=>{document.querySelector("#home").click(),zm("success","You have successfully logged in."),F_.reset(),B_.removeAttribute("style")})).catch((e=>{B_.style.display="block",B_.innerHTML=e.message,zm("error","An error occurred while logging in.")}))}));document.querySelector("#googleLogin").addEventListener("click",(async()=>{await Gm(),await Ir($m,qm),Tr($m).then((e=>{zm("success","You have successfully logged in."),e.user||$m.currentUser?(Km(),B_.removeAttribute("style"),V_.reset()):(Km(),zm("error","An error occurred while logging in."),document.querySelector("#login").click())})).catch((e=>{document.querySelector("#login").click(),B_.style.display="block",B_.innerHTML=e.message}))}));document.querySelector("#githubLogin").addEventListener("click",(e=>{e.preventDefault(),Gm(),yr($m,Hm).then((e=>{Km(),zm("success","You have successfully logged in."),document.querySelector("#home").click(),B_.removeAttribute("style"),V_.reset()})).catch((e=>{Km(),zm("error","An error occurred while logging in."),B_.style.display="block","auth/account-exists-with-different-credential"===e.code?B_.innerHTML="This email is already in use. Try to sign in with a different method.":"auth/popup-closed-by-user"===e.code?B_.removeAttribute("style"):B_.innerHTML=e.message}))}))}();
//# sourceMappingURL=index.64cb5193.js.map
