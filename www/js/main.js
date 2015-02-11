$(document).ready(function() {
  	
  	FastClick.attach(document.body);

	pagename = location.pathname.substring(1);
	webDomain = 'http://hidproductsolutionapp.com/index.php';

	
	$('#back_btn').click(function(e){
		parent.history.back();
		e.preventDefault();
	});

	$('.reset-icon').click(function(){
		window.history.back();
	});

	$('#next_swiper').click(function(){
		window.mySwiper.swipeNext();
	});

	$('#previous_swiper').click(function(){
		window.mySwiper.swipePrev();
	});

	$('.datasheet-download-btn').click(function(){
		window.plugins.socialsharing.share('WORKS!, subject, image and link', 'TEST!', 'www.google.nl/images/srpr/logo4w.png', '"'+ value['pdf'] +'" title=""'); 
	});

	// PDF Form logic below
	$('#pdf_form').submit(function(e){
		
		$('#form_submit').attr('disabled', true);
		$('#form_submit').val('submitting...');


		var strParam = '?';

		var fname = 'fname=' + $('form input#fname').val();
		var lname = 'lname=' + $('form input#lname').val();
		var company = 'company=' + $('form input#company').val();
		var email = 'email=' + $('form input#email').val();
		var phone = 'phone=' + $('form input#phone').val();
		var state = 'state=' + $('form #states').val();
		var country = 'country=' + $('form #country').val();
		var phone = 'pdf=' + $('form input#pdf').val();

		strParam += fname+'&'+lname+'&'+company+'&'+email+'&'+phone+'&'+state+'&'+country;

		var jqxhr = $.get( webDomain+strParam, function(data){
			if (data == 1) {
				$('#pdf_form, #form_instruction').fadeOut(500, function(){
					$('#success_message').removeClass('hide').fadeIn(500);
				});
			}
			else{
				alert('The server was reached successfully however there was a problem sending your requested file. Please try again.');
			};
		})
		.done(function(data) {

		})
		.fail(function() {
			alert('Sorry '+ $('form input#fname').val() +' there was a problem contacting the server to send your PDF. Please check you have a working data connection and try again.');
		})
		.always(function() {
			$('#form_submit').removeAttr('disabled');
			$('#form_submit').val('submit');
		});

		e.preventDefault();

	});


	// Entry check form logic below
	$('#entry_form').submit(function(e){
		e.preventDefault();

		var submittedpassword = $.trim( $('form input#password').val() );

		if( submittedpassword == ''){
			alert('Please enter a password or request one from HID Global');
		}
		else if( submittedpassword == 'HIDuser916' ){
			window.location = 'vertical_choice.html';
		}
		else{
			alert('Incorrect password! Please try again or use the link below to request the password from HID Global');
			$('form input#password').val() = '';
		}	

	});


window.jsonproductsarray = [
	  {
	    "vertical":"pacs",
	    "name":"HID Mobile Access",
	    "model":"none",
	    "description":"Secure access control through mobile devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/hid-mobile-access-solutions-ds-en.pdf",
	    "imagefilename":"mobile-access-12-2014.jpg"
	  },
	  {
	    "vertical":"pacs",
	    "name":"HID Mobile Access Secure Mobile IDs for Smart Devices",
	    "model":"none",
	    "description":"Secure digital identities for physical access control using mobile devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/hid-mobile-id-ds-en.pdf",
	    "imagefilename":"mobile-access-IDs-12-2014.jpg"
	  },
	  {
	    "vertical":"pacs",
	    "name":"HID Mobile Access iCLASS SE & multiCLASS SE Mobile Enabled Readers",
	    "model":"none",
	    "description":"Mobile enabled iCLASS SE Platform Readers that offer new ways to open doors.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/hid-mobile-access-readers-nfc-ds-en.pdf",
	    "imagefilename":"mobile-access-readers-12-2014.jpg"
	  },
	  {
	    "vertical":"pacs",
	    "name":"iCLASS SE Decor",
	    "model":"none",
	    "description":"iCLASS SE Decor Readers are compact and stylish smart card designed to meet architectural and aesthetic requirements.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/iclass-se-decor-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/styles/masthead/public/iclass-se-arch-rdr-gr.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"iCLASS SE",
	    "model":"none",
	    "description":"iCLASS SE readers are part of HID Global's iCLASS SE platform for adaptability, interoperability, and higher security, ideal for new and existing installations.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/iclass-se-readers-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/iclass-se-platform.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"multiCLASS SE Mini-Mullion",
	    "model":"SE RP10",
	    "description":"Mullion, 13.56 MHz Multi-Technology iCLASS, iCLASS Seos & 125 kHz HID Prox, AWID, EM4102 or Indala reader",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/rp15_blk_6145_6143_6144_3.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"multiCLASS SE Mullion",
	    "model":"SE RP15",
	    "description":"Mini-Mullion, 13.56 MHz Multi-Technology iCLASS, iCLASS Seos & 125 kHz HID Prox, AWID, EM4102 or Indala reader",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/rp15_blk_6145_6143_6144_3.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"multiCLASS SE EU Square",
	    "model":"SE RP30",
	    "description":"EU Square (60mm), 13.56 MHz Multi-Technology iCLASS, iCLASS Seos & 125 kHz HID Prox, AWID, EM4102 or Indala reader",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",
	    "imagefilename":"multiclass-se-RP30_blk.jpg"
	  },
	  {
	    "vertical":"pacs",
	    "name":"multiCLASS SE Wall Switch",
	    "model":"SE RP40",
	    "description":"Wall Switch, 13.56 MHz Multi-Technology iCLASS, iCLASS Seos & 125 kHz HID Prox, AWID, EM4102 or Indala reader",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/rp40_blk_6125_6123_6124_3.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"multiCLASS SE Wall Switch Keypad",
	    "model":"SE RPK40",
	    "description":"Wall Switch, 13.56 MHz Multi-Technology iCLASS, iCLASS Seos & 125 kHz HID Prox, AWID, EM4102 or Indala reader with keypad",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/rpk40_blk_6136_6133_6134_2.png"
	  },
	  
	  {
	    "vertical":"pacs",
	    "name":"multiCLASS Magstripe Wall Switch",
	    "model":"RMP40",
	    "description":"Wall Switch, 13.56 MHz Multi-Technology iCLASS reader with magstripe",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-magstripe-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/rm40-magstripe_1.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"ProxPoint Plus",
	    "model":"6005",
	    "description":"Mini-mullion, 125 kHz HID Prox reader",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-proxpoint-plus-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/proxpointplus_blk_6005_6008.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"MiniProx Reader",
	    "model":"5365",
	    "description":"Mullion, 125 kHz HID Prox",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-miniprox-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/miniprox_blk.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"Thinline II Prox Reader",
	    "model":"5395",
	    "description":"Wall switch, 125 kHz HID Prox",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-thinline-ii-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/thinline-classic-straight.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"ProxPro Reader",
	    "model":"5355",
	    "description":"Medium Range, 125 kHz HID Prox",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-proxpro-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/proxpro_blk_5355_5352_5358.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"ProxPro II Reader",
	    "model":"5455",
	    "description":"Medium Range, 125 kHz HID Prox",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-proxpro-ii-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/proxproii_blk_5455_5458.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"ProxPro with Keypad Reader",
	    "model":"5355",
	    "description":"Medium Range, 125 kHz HID Prox reader with keypad",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-proxpro-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/proxpro_keypad_blk_5355_5352_5358.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"EntryProx Reader",
	    "model":"4045",
	    "description":"Wall switch, 125 kHz HID Prox reader and controller for single door",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-enrtyprox-revc-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/entryprox.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"MaxiProx Reader",
	    "model":"5375",
	    "description":"Long Range, 125 kHz HID Prox",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-maxiprox-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/maxiprox_5375.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"Prox80 Reader",
	    "model":"5405",
	    "description":"EU Square, 125 kHz HID Prox",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox80_ds_en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/prox80_5405_wht_.png"
	  },	  
	  {
	    "vertical":"pacs",
	    "name":"pivCLASS Mini-Mullion",
	    "model":"R10-H",
	    "description":"Mini-Mullion PKI-Based FIPS-201 Credential Compatible contact / contactless reader.  Strong authentication when used with pivCLASS PAM.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-controlled-readers-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/r10_blk_6100_6108_6109_1.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"pivCLASS Mullion",
	    "model":"R15-H",
	    "description":"Mullion PKI-Based FIPS-201 Credential Compatible contact / contactless reader.  Strong authentication when used with pivCLASS PAM.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-controlled-readers-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/pivclass-r15_0.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"pivCLASS Prox Wall Switch",
	    "model":"RP40-H",
	    "description":"Wall Switch PKI-Based FIPS-201 Credential Compatible and 125 kHz HID Prox contact / contactless reader.  Strong authentication when used with pivCLASS PAM.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-controlled-readers-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/rp40_blk_6125_6123_6124_3.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"pivCLASS Wall Switch Keypad",
	    "model":"RK40-H",
	    "description":"Wall Switch PKI-Based FIPS-201 Credential Compatible contact / contactless reader with keypad.  Strong authentication when used with pivCLASS PAM.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-rk40-rpk40-fips-201-readers-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/pivclass-rk40_0.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"pivCLASS Contact Wall Switch LCD Keypad",
	    "model":"RKCL40-H",
	    "description":"Double Wall Switch PKI-Based FIPS-201 Credential Compatible contact / contactless reader with keypad and LCD.  Strong authentication when used with pivCLASS PAM.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-limited-readers-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/pivclass-rkcl40.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"EDGE EVO Solo ESH400-K Networked Controller",
	    "model":"ESH400-K ",
	    "description":"A Networked Controller that is a cost-effective, stand-alone, IP-enabled access control solution that is designed for sites with one or two doors utilizing traditional door hardware in an outdoor environment.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/evo-esh400k-reader-ds-en-web.pdf",
	    "imagefilename":"edge-evo-plus-standard-eh400k-networked-controller.jpg"
	  },
	  {
	    "vertical":"pacs",
	    "name":"EDGE EVO Solo ESH400 Hi-O Controller",
	    "model":"ESH400 ",
	    "description":"A Controller that is a cost-effective, stand-alone IP -enabled access control solution that is designed for sites with one or two doors utilizing Hi-O technology in an outdoor or outdoor/indoor environment.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/evo-esh400-controller-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/edge-evo-ehr40-k_5.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"EDGE EVO Solo ESHR40 & ESHRP40 Hi-O Controller/Reader",
	    "model":"ESHR40 & ESHRP40",
	    "description":"A single door controller/readers with Hi-O interface to Hi-O door components and is  a cost-effective, stand-alone, IP -enabled access control solution utilizing Hi-O technology.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/evo-eshr40-eshrp40-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/edge-evo-ehr40-k_5.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"EDGE EVO Solo ESHR40-K Networked Controller/Reader & Module",
	    "model":"ESHR40-K",
	    "description":"A single door controller/reader and module with native interfaces to four inputs and two outputs and is a cost-effective, stand-alone, IP-enabled access control solution. ",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/evo-eshr40K-module-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/edge-evo-ehr40-k_5.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"EDGE EVO Solo ESHRP40-K Networked Controller/Reader & Module",
	    "model":"ESHRP40-K",
	    "description":"Controller/Reader and Module is a cost-effective, stand-alone, IP-enabled access control solution that is designed for sites with one or two doors in an indoor single reader or indoor/outdoor two reader environment.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/evo-eshrp40K-module-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/edge-evo-ehr40-k_5.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"EDGE EVO EH400 Hi-O Networked Controller",
	    "model":"EH400",
	    "description":"A single-door access control panel featuring Power over Ethernet (PoE). The EH400 makes local door decisions and can interface with one or two Hi-O iCLASS readers.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/evo-eh400-reader-ds-en.pdf",
	    "imagefilename":"EdgePlus-Evo-Hi-O-EH400-networked-controller-front.jpg"
	  },
	  {
	    "vertical":"pacs",
	    "name":"EDGE EVO Hi-O Interface Modules",
	    "model":"none",
	    "description":"A Hi-O Interface Modules provide door and extended IO interface between discrete IO and an EDGE EVO Controller. ",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/evo-hio-modules-ds-en.pdf",
	    "imagefilename":"evo-hio-modules-ds-en.jpg"
	  },
	  {
	    "vertical":"pacs",
	    "name":"VertX EVO Controller",
	    "model":"EVO V1000",
	    "description":"IP Master Access Controller, controlling up to 64 doors, 512 inputs or 384 outputs",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/vertx-evo-v1000-controller-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/v1000-evo_1.png"
	  },
	  {
	    "vertical":"pacs",
	    "name":"VertX EVO Controller / Door Interface Reader",
	    "model":"EVO V2000",
	    "description":"IP Controller / Door Interface, controlling up to 2 readers and 1 or 2 doors",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/vertx-evo-v2000-controller-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/v2000-evo_1.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"OMNIKEY 3021 Smart Card Reader",
	    "model":"R3021xxxx",
	    "description":"Contact Card Reader in a small form factor for mass deployment. Compatible with CCID native driver and Win/Linux/Mac/Android devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-3021-usb-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/ok-3021.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"OMNIKEY 3121 Smart Card Reader",
	    "model":"R3121xxxx",
	    "description":"Contact Card Reader for One Hand Desktop Operation. Compatible with CCID native driver and Win/Linux/Mac/Android devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/ok-3121-usb-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/3111_3121_card_oku.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"OMNIKEY 5021CL Smart Card Reader",
	    "model":"R5021xxxx",
	    "description":"High Frequency Smart Card Reader in a stylish housing for all 14443 A/B and 15693 credentials like HID iCLASS and MIFARE DESFire. Compatible with Win/Linux/Mac devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5021-cl-usb-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/ok5021-front.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"OMNIKEY 5025CL Smart Card Reader",
	    "model":"R5025xxxx",
	    "description":"Low Frequency Smart Card Reader for HID Prox credentials. Compatible with CCID native driver and Win/Linux/Mac devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5025-cl-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/ok-5025cl-right-facing_0.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"OMNIKEY 5321CR Smart Card Reader",
	    "model":"R53210229-1",
	    "description":"High Frequency Smart Card Reader in waterproof housing for healthcare or cleanroom applications.  Compatible with all ISO 14443 A/B and 15693 credentials like HID iCLASS and MIFARE DESFire.  Compatible with Win/Linux/Mac devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5321-cr-usb-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/ok5325_oku.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"OMNIKEY 5325 Smart Card Reader",
	    "model":"R5325xxxx",
	    "description":"Dual Interface Low Frequency and Contact Card Reader for card migration scenarios. Compatible with Win/Linux/Mac devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5325-usb-prox-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/ok5321_cl_oku_0.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"OMNIKEY 5421 Smart Card Reader",
	    "model":"R5421xxxx",
	    "description":"Dual Interface High Frequency and Contact Card Reader for card migration scenarios. Compatible with Win/Linux/Mac devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5421-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/ok5421-front-3qrtr-lft-side.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"OMNIKEY 5427 Smart Card Reader",
	    "model":"R5427xxxx",
	    "description":"Dual Frequency Reader with Keyboard Emulation Mode for autonomous handling of cards. Easy system integration without the need for an additional software application. Compatible with HID Seos and Win/Linux/Mac devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5427-ck-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/styles/masthead/public/omnikeyr-5427-ck_1.png?itok=_902D9IM"
	  },
	  {
	    "vertical":"logical",
	    "name":"OMNIKEY 6121 Smart Card Reader",
	    "model":"R6121xxxx",
	    "description":"Contact Card Reader in dongle size housing for SIM size smart cards. Compatible with CCID native driver and Win/Linux/Mac/Android devices.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-6121-mobile-usb-reader-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/ok6121_l_cap_off_oku.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"Lumidigm V-Series Fingerprint Sensor",
	    "model":"V3xx",
	    "description":"The Lumidigm V-Series fingerprint sensors deliver superior biometric authentication and industry-leading liveness detection. In any environment and with any user demographic, improve your application's throughput, accuracy, speed and security with a V-Series fingerprint sensor.",
	    "pdf":"http://www.lumidigm.com/media/Lumidigm_V-Series_Sensors_Datasheet_v1.15.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/lumidigm-v-series-sensor-trans.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"Lumidigm M-Series Fingerprint Sensor",
	    "model":"M3xx",
	    "description":"Built for business, the Lumidigm M-Series is a fast and reliable fingerprint sensor with a convenient footprint. Securely authenticate a user and enable your identity and access management application with a simple tap of a finger.",
	    "pdf":"http://www.lumidigm.com/media/Lumidigm_M-Series_Sensors_Datasheet_v1.15.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/lumidigm_m-series_sensor-new.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"ActivClient",
	    "model":"ACCXXXXLxx",
	    "description":"Smart card solution for strong authentication to protect workstations, mobile devices and networks.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/activid-activclient-security-software-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/activid-secure-activclient.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"ActivID Credential Management System",
	    "model":"CMSXXXXLxx",
	    "description":"Solution for issuing and managing PIV and PIV-I cards, enterprise access cards and mobile credentials.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/activid-cms-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/activid-credential-management-system-img.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"ActivID Appliance",
	    "model":"A4AXXxxxxx",
	    "description":"A versatile, easy to deploy multi-factor authentication appliance ideal for securing employee access to enterprise networks and customer access to online banking.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/identity-assurance-activid-appliance-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/activid-4tress-blue.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"Crescendo C1100 card",
	    "model":"SC0080Jxxxxxxxxx",
	    "description":"High security hybrid smart card technology for converged physical and logical access control",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/crescendo-c1100-smart-card-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/crescendo-smart-card-c1100.png"
	  },
	  {
	    "vertical":"logical",
	    "name":"ActivID Soft Token",
	    "model":"A4Sxxxxx",
	    "description":"Proven, easy-to-use strong authentication for remote employees accessing corporate data, and consumers logging on to online services",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/ActivIDe-soft-tokens-authentication-appliance-ds-en.pdf",
	    "imagefilename":"ActivIDe-soft-tokens-authentication-appliance-group.jpg"
	  },
	  {
	    "vertical":"logical",
	    "name":"Display Card",
	    "model":"BDCxxxxxxxxx",
	    "description":"Convenient, One-Time Password solutions that users can fit in their wallet to protect remote employees accessing corporate data, and consumers logging on to online services",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/activid-authentication-devices-br-en.pdf",
	    "imagefilename":"activid-display-card-touch.jpg"
	  },
	  {
	    "vertical":"logical",
	    "name":"ActivID One-Time Password (OTP) Tokens",
	    "model":"",
	    "description":"Organizations can use a variety of portable, easy-to-use OTP Tokens to strengthen their access security. ",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/activid-one-time-password-tokens-ds-en_0.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/activid-display-token-1.png"
	  },
	  {
	    "vertical":"card",
	    "name":"C50",
	    "model":"51975",
	    "description":"Simple, reliable, affordable entry level solution.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-c50-priner-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/c50_launch_2.png"
	  },
	  {
	    "vertical":"card",
	    "name":"DTC 1000Me",
	    "model":"53200",
	    "description":"Extremely cost-effective, total-cost-of ownership card printing solution.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-dtc1000me-printer-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/dtc1000me-ang-l.png"
	  },
	  {
	    "vertical":"card",
	    "name":"DTC 1250e",
	    "model":"51000",
	    "description":"Affordability meets speed, feature-rich options and Peace-of-mind. Best in class.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-dtc1250e-printer-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/dtc1250e-ang-l_0.png"
	  },
	  {
	    "vertical":"card",
	    "name":"DTC 4250e",
	    "model":"52000",
	    "description":"Flexible and future proof printer.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-dtc4250e-printer-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/dtc-4250e-sngl-ang-l_0.png"
	  },
	  {
	    "vertical":"card",
	    "name":"DTC 4500e",
	    "model":"55000",
	    "description":"Throughput cost-per-card, future proof and security feature packed solution.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-dtc4500e-printer-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/dtc-4500e-dualsd-dual-hpprs-ang-l_0.png"
	  },
	  {
	    "vertical":"card",
	    "name":"HDP5000",
	    "model":"89600",
	    "description":"Get vibrant, High Definition cards in a reliable and affordable package",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-hdp5000-printer-br-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/hdp5000-flip-rt.png"
	  },
	  {
	    "vertical":"card",
	    "name":"HDPii Plus",
	    "model":"89380",
	    "description":"Practical and affordable solution for the instant issuance of a wide range of financial cards",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-hdpiiplus-printer-br-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/hdpii-plus-rt-web.png"
	  },
	  {
	    "vertical":"card",
	    "name":"HDP8500",
	    "model":"88500",
	    "description":"Superior industrial ID printer for extended-run, high throughput credential personalization and issuance",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-hdp8500-printer-br-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/hdp-8500-l-angle.png"
	  },
	  {
	    "vertical":"card",
	    "name":"Asure ID Enterprise",
	    "model":"none",
	    "description":"Asure ID Enterprise enables multiple workstations to share a common database over a network,whether Asure ID is installed on a PC or a Windows 8 Pro Tablet. ",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/asureid-enterprise-software-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/asure-id-7-enterprise.png"
	  },
	  {
	    "vertical":"card",
	    "name":"Asure ID Exchange",
	    "model":"none",
	    "description":"Asure ID Exchange is great for organizations seeking intuitive card design and data management tools for advanced card personalization applications.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/asureid-exchange-software-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/asure-id-7-exchange_1.png"
	  },
	  {
	    "vertical":"card",
	    "name":"Asure ID Express",
	    "model":"none",
	    "description":"Asure ID Express is the ideal choice for organizations looking for an affordable and even easy-to-usestand alone photo ID card software.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/asureid-express-software-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/asure-id-7-express.png"
	  },
	  {
	    "vertical":"card",
	    "name":"Asure ID Solo",
	    "model":"none",
	    "description":"Asure ID Solo is the perfect entry-level card personalization software, it is Easy-to-use as well as easy to learn.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/asureid-solo-software-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/asure-id-7-solo.png"
	  },
	  {
	    "vertical":"card",
	    "name":"EasyLobby Secure Visitor Management",
	    "model":"none",
	    "description":"Enterprise-class solution for visitor registration,\nbadge printing and management of assets and packages Enterprise-class solution for visitor registration,\nbadge printing and management of assets and packages ",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/el-secure-visitor-mgmt-10-software-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/software-vm-svm_4.png"
	  },
	  {
	    "vertical":"card",
	    "name":"EasyLobby eAdvance Visitor Pre-Registration",
	    "model":"none",
	    "description":"Web-based application enables authorized employees\nor tenants to pre-register visitors online.Web-based application enables authorized employees\nor tenants to pre-register visitors online.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/el-e-advance-visitor-mgmt-software-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/software-vm-svm_4.png"
	  },
	  {
	    "vertical":"card",
	    "name":"EasyLobby eKiosk Self Registration",
	    "model":"none",
	    "description":"Visitor self-registration on tablet computers.",
	    "pdf":"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/el-e-kiosk-visitor-mgmt-software-ds-en.pdf",
	    "imagefilename":"http://www.hidglobal.com/sites/hidglobal.com/files/software-vm-svm_4.png"
	  }
	];

}); 
