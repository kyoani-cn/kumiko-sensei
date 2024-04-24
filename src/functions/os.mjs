const { userAgent } = navigator;
const userAgentMatch = (function( userAgent ) {
	userAgent = userAgent.toLowerCase();

	const browser = /(chrome)[ \/]([\w.]+)/               .exec( userAgent ) ||
				  /(webkit)[ \/]([\w.]+)/               .exec( userAgent ) ||
				  /(opera)(?:.*version|)[ \/]([\w.]+)/  .exec( userAgent ) ||
				  /(msie) ([\w.]+)/                     .exec( userAgent ) ||
				  userAgent.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( userAgent ) ||
				  [];

	const os = /(windows) nt ([\d\.]+)?/    .exec(userAgent) ||
			 /(mac) os ?x? ?([\d_\.]+)?/  .exec(userAgent) ||
			 /(android) ?([\d\.]+)/       .exec(userAgent) ||
			 /(linux) ?([\d\.]+)?/        .exec(userAgent) ||
			 /(ipod|iphone|ipad)/		  .exec(userAgent) ||
			 [];

	const osVersion = (os[ 2 ]||'').replace(/_/g,'.');

	return {
		browser:        browser[ 1 ] || '',
		browserVersion: browser[ 2 ] || '',
		os:             os[ 1 ]||'',
		osVersion,
	};
})(userAgent);

console.log('userAgentMatch',userAgentMatch);

for(let key in userAgentMatch){
	if(!userAgentMatch[key]) continue;
    document.documentElement.setAttribute(`data-${key.replace(/[A-Z]/g,a=>`-${a.toLocaleLowerCase()}`)}`,userAgentMatch[key]);
}


export const isIOS = /ipod|iphone|ipad/i.test(userAgent);

export const isMobile = /android|ipod|iphone|ipad/i.test(userAgent);