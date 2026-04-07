(function(i,F,b,K,V){var z={initSideNavigation:function(){i("#scroll-down-listing-details").sideNavigation()},initHero:function(){var e=i(".ip-listing-details__hero-slider-list"),l={accessibility:!1,autoplay:!0,autoplaySpeed:3e4,arrows:!0,dots:!1,speed:800,infinite:!0,pauseOnHover:!0,rows:0,slidesToShow:1,slidesToScroll:1,prevArrow:i(".ip-listing-details__hero-slider-arrow.prev"),nextArrow:i(".ip-listing-details__hero-slider-arrow.next"),fade:!0};e.not(".slick-initialized").slick(l),i(".ip-listing-details__hero-shuffle").on("click",function(){jQuery("button.ip-listing-details__hero-slider-arrow.next").click()})},initAccordion:function(){i(".ip-listing-details__info-accordion-trigger").on("click",function(){var e=i(this);e.hasClass("is-active")?(e.removeClass("is-active"),e.next().slideUp()):(e.addClass("is-active"),e.next().slideDown())})},initGallery:function(){var e=i("#gallery-popup"),l=i(".ip-listing-details__gallery-popup-close"),a=i(".ip-listing-details__gallery-popup-inner");$main_popup_list=i(".ip-listing-details__gallery-popup-main-list"),$thumb_popup_list=i(".ip-listing-details__gallery-popup-thumb-list");var t={infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,dots:!1,arrows:!0,prevArrow:".ip-listing-details__gallery-popup-arrow.prev",nextArrow:".ip-listing-details__gallery-popup-arrow.next",draggable:!1,pauseOnHover:!1,fade:!0,asNavFor:$thumb_popup_list},u={infinite:!0,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,arrows:!1,dots:!1,draggable:!1,pauseOnHover:!1,asNavFor:$main_popup_list,focusOnSelect:!0,responsive:[{breakpoint:992,settings:{slidesToShow:1}}]};i("#gallery-popup")[0],i("#hero-gallery, .ip-listing-details__gallery-item a").on("click",function(r){r.preventDefault();var c=i(this);e.removeClass("aiosp-hide");var s=a[0];s.requestFullscreen?s.requestFullscreen():s.webkitRequestFullscreen?s.webkitRequestFullscreen():s.msRequestFullscreen&&s.msRequestFullscreen(),$main_popup_list.slick(t),$thumb_popup_list.slick(u),$main_popup_list.slick("slickGoTo",c.attr("data-index")-1)}),l.on("click",function(){o()}),i(b).on("keydown",function(r){(r.key==="Escape"||r.keyCode===27)&&(i(".aiosp-close").click(),o())}),i(b).on("fullscreenchange webkitfullscreenchange msfullscreenchange",function(){!document.fullscreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement&&l.click()});function o(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),e.addClass("aiosp-hide")}},initSimilar:function(){if(!jQuery("#IDX-similar-listings-result .IDX-similar-listings--item").length)jQuery(".ip-listing-details__similar").hide();else{var e="";jQuery("#IDX-similar-listings-result .IDX-similar-listings--item").each(function(){var t=jQuery(this).find("a.IDX-similar-listings--item-image").attr("href"),u=jQuery(this).find("img.IDX-similar-listings--item-image").attr("src"),o=jQuery(this).find(".IDX-similar-listings--price").text(),r=jQuery(this).find(".IDX-similar-listings--address-city").text(),c=jQuery(this).find(".IDX-text").html().split(", "),s,g,h="";jQuery.each(c,function(S,p){p.indexOf("bd")>-1&&(s=p.replace("bd","")),p.indexOf("bths")>-1&&(g=p.replace("bths","")),p.indexOf("sq.ft.")>-1&&(h=p.replace("sq.ft.",""))}),r&&(r=r.replace(",",""));var y=jQuery(this).find(".IDX-similar-listings--address .IDX-similar-listings--address-street").text(),w=jQuery(this).find(".IDX-similar-listings--address .IDX-similar-listings--address-city").text(),k=jQuery(this).find(".IDX-similar-listings--address .IDX-similar-listings--address-state").text();beds_html="",s&&(beds_html=`<div><i class="icon-beds"></i> ${s} BEDS</div>`),baths_html="",g&&(baths_html=`<div><i class="icon-baths"></i> ${g} BATHS</div>`),sqft_html="",h&&(sqft_html=`<div><i class="icon-sqft"></i> ${h} SQFT</div>`),e+=`
                        <div class="ip-listing-details__similar-item">
                            <a href="${t}">
                                <div class="ip-listing-details__similar-image">
                                    <div class="global-site-image">
                                        <img src="${u}" alt="Similar Image" width="500" height="540">
                                    </div>
                                    <div class="ip-listing-details__similar-overlay">
                                        <div class="ip-listing-details__similar-price">${o}</div>
                                        <div class="ip-listing-details__similar-specs">
                                            ${beds_html}
                                            ${baths_html}
                                            ${sqft_html}
                                        </div>
                                    </div>
                                </div>
                                <div class="ip-listing-details__similar-text">
                                    <div class="ip-listing-details__similar-address">${y} <span>${w}, ${k}</span></div>
                                </div>
                            </a>
                        </div>
                    `}),jQuery(".ip-listing-details__similar-list").html(e);var l=i(".ip-listing-details__similar-list"),a={accessibility:!1,autoplay:!0,autoplaySpeed:3e4,arrows:!0,dots:!1,speed:800,infinite:!0,pauseOnHover:!0,rows:0,slidesToShow:2,slidesToScroll:1,prevArrow:i(".ip-listing-details__similar-arrow.prev"),nextArrow:i(".ip-listing-details__similar-arrow.next"),responsive:[{breakpoint:992,settings:{slidesToShow:1}}]};l.not(".slick-initialized").slick(a)}},initTitle:function(){i(F).on("load scroll",function(){var e=i(".ip-listing-details__similar-title, .ip-listing-details__gallery-title"),l=e.length;window.requestAnimationFrame(function(){for(var a=0;a<l;a++){var t=e.eq(a),u=i(F).scrollTop(),o=t.offset().top,r=t.height(),c=window.innerHeight*.2-r*.2,s=u-o+c;t.css({transform:"translate3d("+s*.15+"px, 0, 0)"})}})}),i(window).on("load scroll",function(){var e=i(".ip-listing-details__video-title"),l=e.length;window.requestAnimationFrame(function(){for(var a=0;a<l;a++){var t=e.eq(a),u=jQuery(window).scrollTop(),o=t.offset().top,r=t.height(),c=window.innerHeight*.2-r*.2,s=u-o+c;t.css({transform:"translate3d(0,-"+s*-.25+"px, 0)"})}})})},initAnchorButton:function(){jQuery("[data-anchor]").length!==0&&jQuery("[data-anchor]").each(function(){jQuery(this).click(function(e){e.preventDefault();var l=jQuery(this).attr("data-anchor");jQuery("html,body").animate({scrollTop:jQuery(l).offset().top-100},1e3)})})},initPropertyDetails:function(){var e,l,a="",t=0,u=jQuery(".IDX-carouselWrapper a img").length,o="";jQuery(".IDX-carouselWrapper a").each(function($){t++;var d=jQuery(this).find("img").attr("data-src").trim();if(t<=u){t==1&&(o=d),e+=`
                        <div class="ip-listing-details__hero-slider-item">
                            <img src="${d}" alt="Slide Image" width="1600" height="800">
                        </div>
                    `,l+=`
                        <div class="ip-listing-details__gallery-popup-thumb-item" data-index="${t}">
                            <img src="${d}" alt="Gallery" width="176" height="105" class="skip-lazyload">
                        </div>
                    `;var _="";t==5&&(_="<i><!-- do not delete --></i>"),t<=5&&(a+=`
                            <div class="ip-listing-details__gallery-item" data-aos="fade-up">
                                <a href="#" data-index="${t}">
                                    <div class="global-site-image">
                                        <img src="${d}" alt="Gallery Image" width="460" height="340">
                                    </div>
                                </a>
                                ${_}
                            </div>
                        `)}}),jQuery(".ip-listing-details__hero-slider-list").empty(),jQuery(".ip-listing-details__hero-slider-list").html(e),jQuery(".ip-listing-details__gallery-popup-main-list").empty(),jQuery(".ip-listing-details__gallery-popup-main-list").html(e),jQuery(".ip-listing-details__gallery-popup-thumb-list").empty(),jQuery(".ip-listing-details__gallery-popup-thumb-list").html(l),jQuery(".ip-listing-details__gallery-list").empty(),jQuery(".ip-listing-details__gallery-list").html(a),u==0&&jQuery(".ip-listing-details__gallery").hide(),jQuery("#IDX-detailsShowcaseSlides").removeClass("IDX-hide");var r=jQuery(".IDX-detailsAddressNumber").text(),c=jQuery(".IDX-detailsAddressName").text(),s=jQuery(".IDX-detailsAddressUnitNumber").text(),g=jQuery(".IDX-detailsAddressDirection").text(),h=r+" "+g+" "+c+" "+(s?"#"+s:""),y=jQuery(".IDX-detailsAddressCity").text().trim(),w=jQuery(".IDX-detailsAddressState").text().trim(),k=jQuery(".IDX-detailsAddressStateAbrv").text().trim(),S=jQuery(".IDX-detailsAddressZipcode").text().trim(),p=jQuery(".IDX-field-bedrooms .IDX-text").text(),v=jQuery(".IDX-field-totalBaths .IDX-text").text(),A=jQuery(".IDX-field-fullBaths span.IDX-text").text(),T=jQuery(".IDX-field-partialBaths span.IDX-text").text(),x=jQuery(".IDX-field-sqFt span.IDX-text").text(),q=jQuery("#IDX-field-lotsizesquarefeet span.IDX-text").text(),f=jQuery(".IDX-field-propStatus .IDX-text").html(),D=jQuery(".IDX-field-listingID .IDX-text").text(),P=jQuery(".IDX-field-yearBuilt .IDX-text").text();jQuery(".IDX-field-propType .IDX-text").text(),jQuery(".IDX-field-propSubType .IDX-text").text(),jQuery(".IDX-field-subdivision .IDX-text").text(),jQuery("#IDX-field-waterfrontyn .IDX-text").text(),garage=jQuery("#IDX-field-parkingTotal .IDX-text").text(),pools=jQuery("#IDX-field-poolFeatures .IDX-text").text(),furnished=jQuery("#IDX-field-furnished .IDX-text").text();var G=jQuery("#IDX-description").text();if(rent_price=!1,price=jQuery(".IDX-field-listingPrice .IDX-text").text(),price==""&&(price=jQuery(".IDX-field-rntLsePrice .IDX-text").text(),rent_price=!0),price==""&&(price=jQuery(".IDX-field-soldPrice .IDX-text").text(),rent_price=!1),rent_price&&(price=price+"/mo"),!price)if(jQuery(".IDX-field-rntLsePrice .IDX-text").text()!="")price="Lease Price: "+jQuery(".IDX-field-rntLsePrice .IDX-text").text();else{var O=jQuery(".IDX-field-soldPrice .IDX-label").text();O=="Leased For"?(price=jQuery("#IDX-field-soldPrice .IDX-text").text()!=""?jQuery("#IDX-field-soldPrice .IDX-text").text():jQuery(".IDX-field-soldPrice .IDX-text").text(),price="Leased For: "+price):(price=jQuery("#IDX-field-soldPrice .IDX-text").text()!=""?jQuery("#IDX-field-soldPrice .IDX-text").text():jQuery(".IDX-field-soldPrice .IDX-text").text(),price="Sold For: "+price)}(f=="Closed"||f=="Sold")&&(f="Sold",jQuery("#idxb-schedule-showing").hide());var Q="";if(jQuery("#IDX-openHouses").length){var Q='<div class="fp-open-house"><strong>Open House:</strong>';jQuery("#IDX-openHouses .IDX-openHouseWrapper").each(function(){var d=jQuery(this).find(".IDX-ohFreeFormDate").text().trim(),_=jQuery(this).find(".IDX-openHouseTime .IDX-ohFreeFormTime").text().trim(),I="";if(d!==""){var Z=d.replace(/(\d+)(st|nd|rd|th)/,"$1"),X=new Date(Z);if(!isNaN(X.getTime())){var M=String(X.getMonth()+1).padStart(2,"0"),Y=String(X.getDate()).padStart(2,"0"),J=X.getFullYear();I=`${M}/${Y}/${J}`}}var E=_.replace(" to ","-").replace(/\s+/g,"").toLowerCase();I&&E&&(Q+=`
                            <span class="open-house-date">${I}</span>
                            <span class="open-house-time">${E}</span>
                        `)}),Q+="</div>",jQuery(".ip-listing-details__info-openhouse").html(Q),jQuery(".ip-listing-details__info-openhouse").removeClass("hidden")}var C="",C=`
                <span><i></i></span>
                <strong>${h} </strong>${y}, ${k} ${S}
            `;jQuery(".ip-listing-details__info-address").html(C);const m=[];price&&(price_html=`<li>${price}<span>${f}</span></li>`,m.push(price_html)),D&&(mls_number_html=`<li class="hidden">${D} <span>MLS LISTING #</span></li>`,m.push(mls_number_html)),p&&(beds_html=`<li>${p} <span>BEDS</span></li>`,m.push(beds_html)),v&&(bath_html=`<li>${v} <span>BATHS</span></li>`,m.push(bath_html)),x&&(sqft_html=`<li>${x} <span>sqft</span></li>`,m.push(sqft_html)),jQuery(".ip-listing-details__info-details ul").empty(),jQuery(".ip-listing-details__info-details ul").html(m.join(""));var R=jQuery("#IDX-scheduleShowing").attr("href");R?jQuery(".ip-listing-details__info-cta .idx-btn-sched-showing").parent().removeClass("hidden"):jQuery(".ip-listing-details__info-cta .idx-btn-sched-showing").parent().addClass("hidden"),jQuery(".ip-listing-details__info-verbiage").empty(),jQuery(".ip-listing-details__info-verbiage").html("<p>"+G+"</p>");const n=[];f&&(status_html=`
                    <li>
                        <span><i class="icon-property-status"></i> Property Status</span>
                        <strong>${f}</strong>
                    </li>
                `,n.push(status_html)),q&&(lot_size_html=`
                    <li>
                        <span><i class="icon-land-area"></i> Land Area</span>
                        <strong>${q} acres</strong>
                    </li>
                `,n.push(lot_size_html)),price&&(price_html=`
                    <li>
                        <span><i class="icon-price"></i> Price</span>
                        <strong>${price}</strong>
                    </li>
                `,n.push(price_html)),D&&(mls_number_html=`
                    <li class="hidden">
                        <span><i class="icon-property-id"></i> Property ID</span>
                        <strong>${D}</strong>
                    </li>
                `,n.push(mls_number_html)),P&&(year_html=`
                    <li>
                        <span><i class="icon-year-built"></i> Year Built</span>
                        <strong>${P}</strong>
                    </li>
                `,n.push(year_html)),p&&(beds_html=`
                    <li>
                        <span><i class="icon-bedrooms"></i> Beds</span>
                        <strong>${p}</strong>
                    </li>
                `,n.push(beds_html)),x&&(sqft_html=`
                    <li>
                        <span><i class="icon-living-area"></i> Living Area</span>
                        <strong>${x} sqft</strong>
                    </li>
                `,n.push(sqft_html)),v&&(bath_html=`
                    <li>
                        <span><i class="icon-bathrooms"></i> Baths</span>
                        <strong>${v}</strong>
                    </li>
                `,n.push(bath_html)),garage&&(garage_html=`
                    <li>
                        <span><i class="icon-garages"></i> Garages</span>
                        <strong>${garage}</strong>
                    </li>
                `,n.push(garage_html)),A&&(p_baths_html=`
                    <li class="hidden">
                        <span><i class="icon-half-baths"></i> Full Baths</span>
                        <strong>${A}</strong>
                    </li>
                `,n.push(p_baths_html)),T&&(p_baths_html=`
                    <li>
                        <span><i class="icon-half-baths"></i> Half Baths</span>
                        <strong>${T}</strong>
                    </li>
                `,n.push(p_baths_html)),pools&&(pool_html=`
                    <li>
                        <span><i class="icon-pools"></i> Pools</span>
                        <strong>${pools}</strong>
                    </li>
                `,n.push(pool_html)),furnished&&(furnished_html=`
                    <li>
                        <span><i class="icon-furnished"></i> FURNISHED</span>
                        <strong>${furnished}</strong>
                    </li>
                `,n.push(furnished_html)),jQuery(".accordion-listing-information").addClass("hidden"),jQuery(".accordion-listing-information .ip-listing-details__info-specs ul").empty(),jQuery(".accordion-listing-information .ip-listing-details__info-specs ul").html(n.join(""));var H="";skip_panel_title_arr_html=["Location","Basic Features","Primary Features","External","Interior","Financial","Additional","Advanced Features"],jQuery("#IDX-fieldsWrapper .IDX-fieldContainer").each(function($){if(!jQuery(this).hasClass("IDX-hopoZoning")){var d=jQuery(this).find(".IDX-panel-title").text().trim(),_="";if(skip_panel_title_arr_html.includes(d))return!0;jQuery(this).find(".IDX-field").each(function(I){jQuery(this).find(".IDX-label").text()!="Remarks"?_+=`
                                <li>
                                    <span>${jQuery(this).find(".IDX-label").text()}</span>
								    <strong>${jQuery(this).find(".IDX-text").text()}</strong>
                                </li>
                            `:`${jQuery(this).find(".IDX-label").text()}${jQuery(this).find(".IDX-text").text()}`}),H+=`
                        <div class="ip-listing-details__info-accordion-item">
                            <button class="ip-listing-details__info-accordion-trigger">
                                ${d} <i></i>
                            </button>
                            <div class="ip-listing-details__info-accordion-panel">
                                <div class="ip-listing-details__info-specs">
                                    <ul>
                                        ${_}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `}}),jQuery(H).insertAfter(".accordion-listing-information");var U=encodeURIComponent(r+" "+c+" "+y+", "+w+" "+S);jQuery(".ip-listing-details__info-map").empty(),jQuery(".ip-listing-details__info-map").html('<iframe src="https://maps.google.com/maps?q='+U+'&t=&z=13&ie=UTF8&iwloc=&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');var W=`
            
                <a href="#" aria-label="Share" data-id="sharethis">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="8.59" y1="10.49" x2="15.42" y2="6.51"/>
                    </svg>

                </a>
                <a href="#" aria-label="Facebook" data-id="facebook">
                    <i class="ai-font-facebook"></i>
                </a>
                <a href="#" aria-label="X" data-id="twitter">
                    <i class="ai-font-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn" data-id="linkedin">
                    <i class="ai-font-linkedin"></i>
                </a>
                <a href="#" aria-label="Pinterest" data-id="pinterest">
                    <i class="ai-font-pinterest"></i>
                </a>
                <a href="#" aria-label="Email" data-id="email">
                    <i class="ai-font-envelope-f"></i>
                </a>
            
            `;jQuery(".ip-listing-details__info-share").append(W),jQuery(".ip-listing-details__info-share a").each(function(){jQuery(this).click(function($){$.preventDefault();var d=jQuery(this).attr("data-id");jQuery('[data-network="'+d+'"]').click()})}),jQuery("#IDX-detailsHotAction-vt").length&&(o&&jQuery(".btn-virtual-tour img").attr("src",o),jQuery(".btn-virtual-tour").on("click",function(){jQuery("#IDX-detailsHotAction-vt a").click()}),jQuery(".ip-listing-details__video").removeClass("hidden"));var B="";B=`${h} <i></i>`,jQuery(".ip-listing-details__gallery-title .global-site-title span").html(B);var N="";N=`${h}`,jQuery(".ip-listing-details__gallery-popup-title strong").html(N);var j="";j=`${h}?`,j=j.replace(" ?","?"),jQuery(".ip-listing-details__form-title strong").html(j),jQuery(".ip-listing-details__similar-cta .back-to-properties").attr("href",window.location.origin+"/idx/featured/"),jQuery(".ip-listing-details__similar-cta .search-mls").attr("href",window.location.origin+"/idx/search/advanced/"),f=="Sold"&&jQuery(".ip-listing-details__similar").addClass("hidden");var L=jQuery("#IDX-detailsWrapper").next("div").html();jQuery(".ip-listing-details__disclaimer-container").empty(),L+=`
                <div class="idx-provider">Data services provided by <a href="https://www.idxbroker.com/" target="blank">IDX Broker</a></div>
            `,jQuery(".ip-listing-details__disclaimer-container").html(L),jQuery("#IDX-resultsDisclaimer").removeAttr("style")},initFormSource:function(){jQuery("#ldf-Listing").val(window.location.href)},init:function(){this.initPropertyDetails(),this.initSideNavigation(),this.initHero(),this.initAccordion(),this.initGallery(),this.initSimilar(),this.initTitle(),this.initAnchorButton(),this.initFormSource()}};i(b).ready(function(){z.init()})})(jQuery,window,document);
