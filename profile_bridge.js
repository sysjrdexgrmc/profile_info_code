function audioInfo_() {
    var audioCtx = new(window.AudioContext || window.webkitAudioContext);
    var compressor = audioCtx.createDynamicsCompressor();
    var audioInfo = {};
    audioInfo["threshold_value"] = compressor.threshold && compressor.threshold.value;
    audioInfo["knee_value"] = compressor.knee && compressor.knee.value;
    audioInfo["ratio_value"] = compressor.ratio && compressor.ratio.value;
    audioInfo["reduction_value"] = compressor.reduction && compressor.reduction.value;
    audioInfo["attack_value"] = compressor.attack && compressor.attack.value;
    audioInfo["release_value"] = compressor.release && compressor.release.value;
    return audioInfo;
}
function findFontList() {
    var a, i = "18thCentury;8514oem;AcmeFont;Alfredo;Alien Encounters;Almonte Snow;Amethyst;AR BERKLEY;AR JULIAN;Asimov;Autumn;Baby Kruffy;Balthazar;Bastion;Bellerose;Bitstream Vera Sans;BN Jinx;BN Machine;Bobcat;BolsterBold;Borealis;BOUTON International Symbols;Brandish;Brussels;Calligraphic;Calvin;Candles;Chinyen;Colbert;Commons;Coolsville;Corporate;Cracked Johnnie;Creepygirl;Dayton;Deneane;Detente;Digifit;Distant Galaxy;Dominican;Emmett;Enliven;Ethnocentric;Expressway Rg;Fingerpop;Flubber;Frankfurter Venetian TT;Gazzarelli;Geotype TT;Glockenspiel;Good Times;Greek Diner Inline TT;Hand Me Down S (BRK);Hansen;Harvest;HarvestItal;Haxton Logos TT;Heavy Heap;Helvetica LT Std;HelveticaNeueLT Com 107 XBlkCn;Highboot;Hollywood Hills;Hombre;Huxley Titling;Induction;Italianate;LetterOMatic!;Limousine;LittleLordFontleroy;Mael;Manorly;Martina;MelodBold;Minerva;Moonbeam;Mycalc;Nasalization;Neon Lights;Nina;Notram;November;OpineHeavy;Parry Hotter;PenultimateLight;PhrasticMedium;Pirate;PR Celtic Narrow;QuiverItal;Roland;Rondalo;RowdyHeavy;Russel Write TT;Salina;SF Movie Poster;Skinny;Snowdrift;Splash;Stephen;SWGamekeys MT;Tarzan;Terminator Two;Toledo;Valken;Vivian;Waverly;Whimsy TT;Woodcut;X-Files;Year supply of fairy cakes;.Al Bayan PUA;.Al Nile PUA;.Al Tarikh PUA;.Apple Color Emoji UI;.Apple SD Gothic NeoI;.Aqua Kana;.Aqua Kana Bold;.Arabic UI Display;.Arabic UI Text;.Arial Hebrew Desk Interface;.Baghdad PUA;.Beirut PUA;.Damascus PUA;.DecoType Naskh PUA;.Diwan Kufi PUA;.Farah PUA;.Geeza Pro Interface;.Geeza Pro PUA;.HeitiUI GB18030PUA;.HeitiUI J;.HeitiUI K;.HeitiUI SC;.HeitiUI TC;.Helvetica LT MM;.Helvetica Neue Desk UI;.Helvetica Neue Desk UI Bold;.Helvetica Neue Desk UI Bold Italic;.Helvetica Neue Desk UI Italic;.Helvetica Neue DeskInterface;.Hiragino Kaku Gothic Interface;.Hiragino Sans GB Interface;.Keyboard;.KufiStandardGK PUA;.Lucida Grande UI;.Muna PUA;.Nadeem PUA;.New York;.Noto Nastaliq Urdu UI;.PingFang HK;.PingFang SC;.PingFang TC;.SF Compact Display;.SF Compact Rounded;.SF Compact Text;.SF NS;.SF NS Display;.SF NS Display Condensed;.SF NS Mono;.SF NS Rounded;.SF NS Symbols;.SF NS Text;.SF NS Text Condensed;.Sana PUA;.Savoye LET CC.;.Times LT MM;AIGDT;AMGDT;AR PL UKai CN;AR PL UKai HK;AR PL UKai TW;AR PL UKai TW MBE;AR PL UMing CN;AR PL UMing HK;AR PL UMing TW;AR PL UMing TW MBE;Abadi MT Condensed;Abyssinica SIL;AcadEref;Adobe Arabic;Adobe Caslon Pro;Adobe Caslon Pro Bold;Adobe Devanagari;Adobe Fan Heiti Std B;Adobe Fangsong Std R;Adobe Garamond Pro;Adobe Garamond Pro Bold;Adobe Gothic Std B;Adobe Hebrew;Adobe Heiti Std R;Adobe Kaiti Std R;Adobe Ming Std L;Adobe Myungjo Std M;Adobe Naskh Medium;Adobe Song Std L;Agency FB;Aharoni;Aharoni Bold;Aharoni CLM;Al Bayan;Al Bayan Bold;Al Bayan Plain;Al Nile;Al Nile Bold;Al Tarikh;Al Tarikh Regular;AlArabiya;AlBattar;AlHor;AlManzomah;AlYarmook;Aldhabi;Alexandra Script;Algerian;AlternateGothic2 BT;Amadeus;AmdtSymbols;American Typewriter;American Typewriter Bold;American Typewriter Condensed;American Typewriter Condensed Bold;American Typewriter Condensed Light;American Typewriter Light;American Typewriter Semibold;Amiri;Amiri Quran;Amiri Quran Colored;AnastasiaScript;Andale Mono;Andalus;Andika;Android Emoji;Angsana New;Angsana New Bold;Angsana New Bold Italic;Angsana New Italic;AngsanaUPC;AngsanaUPC Bold;AngsanaUPC Bold Italic;AngsanaUPC Italic;Ani;AnjaliOldLipi;Annabelle;Aparajita;Aparajita Bold;Aparajita Bold Italic;Aparajita Italic;Apple Braille;Apple Braille Outline 6 Dot;Apple Braille Outline 8 Dot;Apple Braille Pinpoint 6 Dot;Apple Braille Pinpoint 8 Dot;Apple Chancery;Apple Color Emoji;Apple LiGothic;Apple LiGothic Medium;Apple LiSung;Apple LiSung Light;Apple SD Gothic Neo;Apple SD Gothic Neo Bold;Apple SD Gothic Neo Heavy;Apple SD Gothic Neo Light;Apple SD Gothic Neo Medium;Apple SD Gothic Neo Regular;Apple SD Gothic Neo SemiBold;Apple SD Gothic Neo Thin;Apple SD Gothic Neo UltraLight;Apple SD GothicNeo ExtraBold;Apple Symbols;AppleGothic;AppleGothic Regular;AppleMyungjo;AppleMyungjo Regular;AquaKana;Arab;Arabic Transparent;Arabic Typesetting;Arial;Arial Baltic;Arial Black;Arial Bold;Arial Bold Italic;Arial CE;Arial CYR;Arial Cyr;Arial Greek;Arial Hebrew;Arial Hebrew Bold;Arial Hebrew Light;Arial Hebrew Scholar;Arial Hebrew Scholar Bold;Arial Hebrew Scholar Light;Arial Italic;Arial Narrow;Arial Narrow Bold;Arial Narrow Bold Italic;Arial Narrow Italic;Arial Nova;Arial Nova Bold;Arial Nova Bold Italic;Arial Nova Cond;Arial Nova Cond Bold;Arial Nova Cond Bold Italic;Arial Nova Cond Italic;Arial Nova Cond Light;Arial Nova Cond Light Italic;Arial Nova Italic;Arial Nova Light;Arial Nova Light Italic;Arial Rounded MT Bold;Arial TUR;Arial Unicode MS;Arimo;Ariston;Arno Pro;Arno Pro Caption;Arno Pro Display;Arno Pro Light Display;Arno Pro SmText;Arno Pro Smbd;Arno Pro Smbd Caption;Arno Pro Smbd Display;Arno Pro Smbd SmText;Arno Pro Smbd Subhead;Arno Pro Subhead;Arundina;Athelas;Athelas Bold;Athelas Bold Italic;Athelas Italic;Athelas Regular;Avenir;Avenir Black;Avenir Black Oblique;Avenir Book;Avenir Book Oblique;Avenir Heavy;Avenir Heavy Oblique;Avenir Light;Avenir Light Oblique;Avenir Medium;Avenir Medium Oblique;Avenir Next;Avenir Next Bold;Avenir Next Bold Italic;Avenir Next Condensed;Avenir Next Condensed Bold;Avenir Next Condensed Bold Italic;Avenir Next Condensed Demi Bold;Avenir Next Condensed Demi Bold Italic;Avenir Next Condensed Heavy;Avenir Next Condensed Heavy Italic;Avenir Next Condensed Italic;Avenir Next Condensed Medium;Avenir Next Condensed Medium Italic;Avenir Next Condensed Regular;Avenir Next Condensed Ultra Light;Avenir Next Condensed Ultra Light Italic;Avenir Next Demi Bold;Avenir Next Demi Bold Italic;Avenir Next Heavy;Avenir Next Heavy Italic;Avenir Next Italic;Avenir Next Medium;Avenir Next Medium Italic;Avenir Next Regular;Avenir Next Ultra Light;Avenir Next Ultra Light Italic;Avenir Oblique;Avenir Roman;Ayuthaya;BIZ UDGothic;BIZ UDGothic Bold;BIZ UDMincho;BIZ UDMincho Medium;BIZ UDPGothic;BIZ UDPGothic Bold;BIZ UDPMincho;BIZ UDPMincho Medium;BPG Algeti GPL&GNU;BPG Chveulebrivi GPL&GNU;BPG Courier GPL&GNU;BPG Courier S GPL&GNU;BPG DedaEna Block GPL&GNU;BPG DejaVu Sans 2011 GNU-GPL;BPG Elite GPL&GNU;BPG Excelsior Caps GPL&GNU;BPG Excelsior Condencerd GPL&GNU;BPG Excelsior GPL&GNU;BPG Glaho GPL&GNU;BPG Gorda GPL&GNU;BPG Ingiri GPL&GNU;BPG Mrgvlovani Caps GNU&GPL;BPG Mrgvlovani GPL&GNU;BPG Nateli Caps GPL&GNU;BPG Nateli Condenced GPL&GNU;BPG Nateli GPL&GNU;BPG Nino Medium Cond GPL&GNU;BPG Nino Medium GPL&GNU;BPG Sans GPL&GNU;BPG Sans Medium GPL&GNU;BPG Sans Modern GPL&GNU;BPG Sans Regular GPL&GNU;BPG Serif GPL&GNU;BPG Serif Modern GPL&GNU;Baghdad;Baghdad Regular;Bahnschrift;Bahnschrift Light;Bahnschrift SemiBold;Bahnschrift SemiLight;Bangla MN;Bangla MN Bold;Bangla Sangam MN;Bangla Sangam MN Bold;BankGothic Lt BT;BankGothic Md BT;Baoli SC;Baoli SC Regular;Baoli TC;Baoli TC Regular;Baskerville;Baskerville Bold;Baskerville Bold Italic;Baskerville Italic;Baskerville Old Face;Baskerville SemiBold;Baskerville SemiBold Italic;Batang;BatangChe;Bauhaus 93;Beirut;Beirut Regular;Bell Gothic Std Black;Bell Gothic Std Light;Bell MT;Berlin Sans FB;Berlin Sans FB Demi;Bernard MT Condensed;BiauKai;Bickham Script One;Bickham Script Pro Regular;Bickham Script Pro Semibold;Bickham Script Two;Big Caslon;Big Caslon Medium;Birch Std;Bitstream Charter;Blackadder ITC;Blackoak Std;Bodoni 72;Bodoni 72 Bold;Bodoni 72 Book;Bodoni 72 Book Italic;Bodoni 72 Oldstyle;Bodoni 72 Oldstyle Bold;Bodoni 72 Oldstyle Book;Bodoni 72 Oldstyle Book Italic;Bodoni 72 Smallcaps;Bodoni 72 Smallcaps Book;Bodoni MT;Bodoni MT Black;Bodoni MT Condensed;Bodoni MT Poster Compressed;Bodoni Ornaments;Book Antiqua;Bookman Old Style;Bookshelf Symbol 7;Bradley Hand;Bradley Hand Bold;Bradley Hand ITC;Britannic Bold;Broadway;Browallia New;Browallia New Bold;Browallia New Bold Italic;Browallia New Italic;BrowalliaUPC;BrowalliaUPC Bold;BrowalliaUPC Bold Italic;BrowalliaUPC Italic;Brush Script MT;Brush Script MT Italic;Brush Script Std;C059;Caladea;Caladings CLM;Calibri;Calibri Bold;Calibri Bold Italic;Calibri Italic;Calibri Light;Calibri Light Italic;Californian FB;Calisto MT;Calligraph;Cambria;Cambria Bold;Cambria Bold Italic;Cambria Italic;Cambria Math;Candara;Candara Bold;Candara Bold Italic;Candara Italic;Candara Light;Candara Light Italic;Cantarell;Cantarell Extra Bold;Cantarell Light;Cantarell Thin;Carlito;Carolina;Castellar;Centaur;Century;Century Gothic;Century Schoolbook;Century Schoolbook L;Ceremonious Two;Chalkboard;Chalkboard Bold;Chalkboard SE;Chalkboard SE Bold;Chalkboard SE Light;Chalkboard SE Regular;Chalkduster;Chandas;Chaparral Pro;Chaparral Pro Light;Charcoal CY;Charlemagne Std;Charter;Charter Black;Charter Black Italic;Charter Bold;Charter Bold Italic;Charter Italic;Charter Roman;Chilanka;Chiller;CityBlueprint;Clarendon BT;Clarendon Blk BT;Clarendon Lt BT;Clean;Cochin;Cochin Bold;Cochin Bold Italic;Cochin Italic;Colonna MT;Comfortaa;Comfortaa Light;Comic Sans MS;Comic Sans MS Bold;Comic Sans MS Bold Italic;Comic Sans MS Italic;CommercialPi BT;CommercialScript BT;Complex;Consolas;Consolas Bold;Consolas Bold Italic;Consolas Italic;Constantia;Constantia Bold;Constantia Bold Italic;Constantia Italic;Cooper Black;Cooper Std Black;Copperplate;Copperplate Bold;Copperplate Gothic;Copperplate Gothic Bold;Copperplate Gothic Light;Copperplate Light;Copyist;Corbel;Corbel Bold;Corbel Bold Italic;Corbel Italic;Corbel Light;Corbel Light Italic;Cordia New;Cordia New Bold;Cordia New Bold Italic;Cordia New Italic;CordiaUPC;CordiaUPC Bold;CordiaUPC Bold Italic;CordiaUPC Italic;Corsiva Hebrew;Corsiva Hebrew Bold;Cortoba;CountryBlueprint;Courier;Courier 10 Pitch;Courier Bold;Courier Bold Oblique;Courier New;Courier New Baltic;Courier New Bold;Courier New Bold Italic;Courier New CE;Courier New CYR;Courier New Cyr;Courier New Greek;Courier New Italic;Courier New TUR;Courier Oblique;Cousine;Curlz MT;Cursor;D050000L;DFKai-SB;DIN Alternate;DIN Alternate Bold;DIN Condensed;DIN Condensed Bold;Damascus;Damascus Bold;Damascus Light;Damascus Medium;Damascus Regular;Damascus Semi Bold;DaunPenh;David;David Bold;David CLM;DecoType Naskh;DecoType Naskh Regular;Decor;DejaVu Math TeX Gyre;DejaVu Sans;DejaVu Sans Condensed;DejaVu Sans Light;DejaVu Sans Mono;DejaVu Serif;DejaVu Serif Condensed;DengXian;DengXian Bold;DengXian Light;Devanagari MT;Devanagari MT Bold;Devanagari Sangam MN;Devanagari Sangam MN Bold;Didot;Didot Bold;Didot Italic;DilleniaUPC;DilleniaUPC Bold;DilleniaUPC Bold Italic;DilleniaUPC Italic;Dimnah;Dingbats;Diwan Kufi;Diwan Kufi Regular;Diwan Mishafi;Diwan Thuluth;Diwan Thuluth Regular;DokChampa;Dotum;DotumChe;Droid Arabic Kufi;Droid Arabic Naskh;Droid Naskh Shift Alt;Droid Sans;Droid Sans Arabic;Droid Sans Armenian;Droid Sans Devanagari;Droid Sans Ethiopic;Droid Sans Fallback;Droid Sans Georgian;Droid Sans Hebrew;Droid Sans Japanese;Droid Sans Mono;Droid Sans Tamil;Droid Sans Thai;Droid Serif;Drugulin CLM;Dutch801 Rm BT;Dutch801 XBd BT;Dyuthi;Ebrima;Ebrima Bold;Eccentric Std;Edwardian Script ITC;Eeyek Unicode;Electron;Elephant;Ellinia CLM;EmojiOne Mozilla;Engravers MT;Eras Bold ITC;Eras Demi ITC;Eras Light ITC;Eras Medium ITC;Estrangelo Edessa;EucrosiaUPC;EucrosiaUPC Bold;EucrosiaUPC Bold Italic;EucrosiaUPC Italic;Euphemia;Euphemia UCAS;Euphemia UCAS Bold;Euphemia UCAS Italic;EuroRoman;Eurostile;Ezra SIL;Ezra SIL SR;FangSong;Farah;Farah Regular;Farisi;Farisi Regular;Felix Titling;Fixed;Fixed Miriam Transparent;Fixedsys;FontAwesome;Footlight MT Light;Forte;Frank Ruehl CLM;FrankRuehl;Franklin Gothic Book;Franklin Gothic Demi;Franklin Gothic Demi Cond;Franklin Gothic Heavy;Franklin Gothic Medium;Franklin Gothic Medium Cond;Franklin Gothic Medium Italic;Free Avant Garde;Free Bookman;Free Chancery;Free Courier;Free Helvetian;Free Helvetian Condensed;Free Paladin;Free Schoolbook;Free Times;FreeMono;FreeSans;FreeSerif;Freehand521 BT;FreesiaUPC;FreesiaUPC Bold;FreesiaUPC Bold Italic;FreesiaUPC Italic;Freestyle Script;French Script MT;Furat;Futura;Futura Bold;Futura Condensed ExtraBold;Futura Condensed Medium;Futura Md BT;Futura Medium;Futura Medium Italic;GB18030 Bitmap;GDT;GENISO;Gabriola;Gadugi;Gadugi Bold;Galvji;Garamond;Garamond Premr Pro;Garamond Premr Pro Smbd;Gargi;Garuda;Gautami;Gautami Bold;Gayathri;Gayathri Thin;Geeza Pro;Geeza Pro Bold;Geeza Pro Regular;Geneva;Geneva CY;Gentium;Gentium Basic;Gentium Book Basic;GentiumAlt;Georgia;Georgia Bold;Georgia Bold Italic;Georgia Italic;Georgia Pro;Georgia Pro Black;Georgia Pro Black Italic;Georgia Pro Bold;Georgia Pro Bold Italic;Georgia Pro Cond;Georgia Pro Cond Black;Georgia Pro Cond Black Italic;Georgia Pro Cond Bold;Georgia Pro Cond Bold Italic;Georgia Pro Cond Italic;Georgia Pro Cond Light;Georgia Pro Cond Light Italic;Georgia Pro Cond Semibold;Georgia Pro Cond Semibold Italic;Georgia Pro Italic;Georgia Pro Light;Georgia Pro Light Italic;Georgia Pro Semibold;Georgia Pro Semibold Italic;Giddyup Std;Gigi;Gill Sans;Gill Sans Bold;Gill Sans Bold Italic;Gill Sans Italic;Gill Sans Light;Gill Sans Light Italic;Gill Sans MT;Gill Sans MT Condensed;Gill Sans MT Ext Condensed Bold;Gill Sans Nova;Gill Sans Nova Bold;Gill Sans Nova Bold Italic;Gill Sans Nova Cond;Gill Sans Nova Cond Bold;Gill Sans Nova Cond Bold Italic;Gill Sans Nova Cond Italic;Gill Sans Nova Cond Lt;Gill Sans Nova Cond Lt Italic;Gill Sans Nova Cond Ultra Bold;Gill Sans Nova Cond XBd;Gill Sans Nova Cond XBd Italic;Gill Sans Nova Italic;Gill Sans Nova Light;Gill Sans Nova Light Italic;Gill Sans Nova Ultra Bold;Gill Sans SemiBold;Gill Sans SemiBold Italic;Gill Sans Ultra Bold;Gill Sans Ultra Bold Condensed;Gill Sans UltraBold;Gisha;Gisha Bold;Gloucester MT Extra Condensed;GothicE;GothicG;GothicI;Goudy Old Style;Goudy Stout;Granada;Graph;GreekC;GreekS;Gubbi;Gujarati MT;Gujarati MT Bold;Gujarati Sangam MN;Gujarati Sangam MN Bold;Gulim;GulimChe;GungSeo;GungSeo Regular;Gungsuh;GungsuhChe;Gurmukhi MN;Gurmukhi MN Bold;Gurmukhi MT;Gurmukhi Sangam MN;Gurmukhi Sangam MN Bold;Hadasim CLM;Haettenschweiler;Hani;Hannotate SC;Hannotate SC Bold;Hannotate SC Regular;Hannotate TC;Hannotate TC Bold;Hannotate TC Regular;HanziPen SC;HanziPen SC Bold;HanziPen SC Regular;HanziPen TC;HanziPen TC Bold;HanziPen TC Regular;Haramain;Harlow Solid Italic;Harrington;HeadLineA Regular;HeadlineA;Heather Script One;Hei;Hei Regular;Heiti SC;Heiti SC Light;Heiti SC Medium;Heiti TC;Heiti TC Light;Heiti TC Medium;Helvetica;Helvetica Bold;Helvetica Bold Oblique;Helvetica CY;Helvetica CY Bold;Helvetica CY BoldOblique;Helvetica CY Oblique;Helvetica CY Plain;Helvetica Light;Helvetica Light Oblique;Helvetica Neue;Helvetica Neue Bold;Helvetica Neue Bold Italic;Helvetica Neue Condensed Black;Helvetica Neue Condensed Bold;Helvetica Neue Italic;Helvetica Neue Light;Helvetica Neue Light Italic;Helvetica Neue Medium;Helvetica Neue Medium Italic;Helvetica Neue Thin;Helvetica Neue Thin Italic;Helvetica Neue UltraLight;Helvetica Neue UltraLight Italic;Helvetica Oblique;Herculanum;Hershey-Gothic-English;Hershey-Gothic-German;Hershey-Gothic-Italian;Hershey-Plain-Duplex;Hershey-Plain-Duplex-Italic;Hershey-Plain-Triplex;Hershey-Plain-Triplex-Italic;Hershey-Script-Complex;Hershey-Script-Simplex;High Tower Text;Hiragino Kaku Gothic Pro;Hiragino Kaku Gothic Pro W3;Hiragino Kaku Gothic Pro W6;Hiragino Kaku Gothic ProN;Hiragino Kaku Gothic ProN W3;Hiragino Kaku Gothic ProN W6;Hiragino Kaku Gothic Std;Hiragino Kaku Gothic Std W8;Hiragino Kaku Gothic StdN;Hiragino Kaku Gothic StdN W8;Hiragino Maru Gothic Pro;Hiragino Maru Gothic Pro W4;Hiragino Maru Gothic ProN;Hiragino Maru Gothic ProN W4;Hiragino Mincho Pro;Hiragino Mincho Pro W3;Hiragino Mincho Pro W6;Hiragino Mincho ProN;Hiragino Mincho ProN W3;Hiragino Mincho ProN W6;Hiragino Sans;Hiragino Sans CNS;Hiragino Sans CNS W3;Hiragino Sans CNS W6;Hiragino Sans GB;Hiragino Sans GB W3;Hiragino Sans GB W6;Hiragino Sans W0;Hiragino Sans W1;Hiragino Sans W2;Hiragino Sans W3;Hiragino Sans W4;Hiragino Sans W5;Hiragino Sans W6;Hiragino Sans W7;Hiragino Sans W8;Hiragino Sans W9;Hobo Std;Hoefler Text;Hoefler Text Black;Hoefler Text Black Italic;Hoefler Text Italic;Hoefler Text Ornaments;HoloLens MDL2 Assets;Homa;Hor;IPAGothic;IPAMincho;IPAPGothic;IPAPMincho;ISOCP;ISOCP2;ISOCP3;ISOCPEUR;ISOCT;ISOCT2;ISOCT3;ISOCTEUR;ITF Devanagari;ITF Devanagari Bold;ITF Devanagari Book;ITF Devanagari Demi;ITF Devanagari Light;ITF Devanagari Marathi;ITF Devanagari Marathi Bold;ITF Devanagari Marathi Book;ITF Devanagari Marathi Demi;ITF Devanagari Marathi Light;ITF Devanagari Marathi Medium;ITF Devanagari Medium;Impact;Imprint MT Shadow;InaiMathi;InaiMathi Bold;Informal Roman;Ink Free;Iowan Old Style;Iowan Old Style Black;Iowan Old Style Black Italic;Iowan Old Style Bold;Iowan Old Style Bold Italic;Iowan Old Style Italic;Iowan Old Style Roman;Iowan Old Style Titling;IrisUPC;IrisUPC Bold;IrisUPC Bold Italic;IrisUPC Italic;Iskoola Pota;Iskoola Pota Bold;Italic;ItalicC;ItalicT;Jamrul;Japan;JasmineUPC;JasmineUPC Bold;JasmineUPC Bold Italic;JasmineUPC Italic;Javanese Text;Jet;Jokerman;Jomolhari;Juice ITC;KacstArt;KacstBook;KacstDecorative;KacstDigital;KacstFarsi;KacstLetter;KacstNaskh;KacstOffice;KacstOne;KacstPen;KacstPoster;KacstQurn;KacstScreen;KacstTitle;KacstTitleL;Kai;Kai Regular;KaiTi;Kailasa;Kailasa Bold;Kailasa Regular;Kaiti SC;Kaiti SC Black;Kaiti SC Bold;Kaiti SC Regular;Kaiti TC;Kaiti TC Black;Kaiti TC Bold;Kaiti TC Regular;Kalapi;Kalimati;Kalinga;Kalinga Bold;Kalyani;Kannada MN;Kannada MN Bold;Kannada Sangam MN;Kannada Sangam MN Bold;Kartika;Kartika Bold;Karumbi;Kayrawan;Kedage;Kefa;Kefa Bold;Kefa Regular;Keraleeyam;Keter YG;Keyboard;Khalid;Khmer MN;Khmer MN Bold;Khmer OS;Khmer OS Battambang;Khmer OS Bokor;Khmer OS Content;Khmer OS Fasthand;Khmer OS Freehand;Khmer OS Metal Chrieng;Khmer OS Muol;Khmer OS Muol Light;Khmer OS Muol Pali;Khmer OS Siemreap;Khmer OS System;Khmer Sangam MN;Khmer UI;Khmer UI Bold;Kinnari;Klee;Klee Demibold;Klee Medium;KodchiangUPC;KodchiangUPC Bold;KodchiangUPC Bold Italic;KodchiangUPC Italic;Kohinoor Bangla;Kohinoor Bangla Bold;Kohinoor Bangla Light;Kohinoor Bangla Medium;Kohinoor Bangla Semibold;Kohinoor Devanagari;Kohinoor Devanagari Bold;Kohinoor Devanagari Light;Kohinoor Devanagari Medium;Kohinoor Devanagari Regular;Kohinoor Devanagari Semibold;Kohinoor Gujarati;Kohinoor Telugu;Kohinoor Telugu Bold;Kohinoor Telugu Light;Kohinoor Telugu Medium;Kohinoor Telugu Semibold;Kokila;Kokila Bold;Kokila Bold Italic;Kokila Italic;Kokonor;Kokonor Regular;Kozuka Gothic Pr6N B;Kozuka Gothic Pr6N EL;Kozuka Gothic Pr6N H;Kozuka Gothic Pr6N L;Kozuka Gothic Pr6N M;Kozuka Gothic Pr6N R;Kozuka Gothic Pro B;Kozuka Gothic Pro EL;Kozuka Gothic Pro H;Kozuka Gothic Pro L;Kozuka Gothic Pro M;Kozuka Gothic Pro R;Kozuka Mincho Pr6N B;Kozuka Mincho Pr6N EL;Kozuka Mincho Pr6N H;Kozuka Mincho Pr6N L;Kozuka Mincho Pr6N M;Kozuka Mincho Pr6N R;Kozuka Mincho Pro B;Kozuka Mincho Pro EL;Kozuka Mincho Pro H;Kozuka Mincho Pro L;Kozuka Mincho Pro M;Kozuka Mincho Pro R;Kristen ITC;Krungthep;KufiStandardGK;KufiStandardGK Regular;Kunstler Script;LKLUG;Laksaman;Lantinghei SC;Lantinghei SC Demibold;Lantinghei SC Extralight;Lantinghei SC Heavy;Lantinghei TC;Lantinghei TC Demibold;Lantinghei TC Extralight;Lantinghei TC Heavy;Lao MN;Lao MN Bold;Lao Sangam MN;Lao UI;Lao UI Bold;LastResort;Latha;Latha Bold;Lato;Leelawadee;Leelawadee Bold;Leelawadee UI;Leelawadee UI Bold;Leelawadee UI Leelawadee UI;Leelawadee UI Semilight;Letter Gothic Std;Levenim MT;Levenim MT Bold;LiHei Pro;LiSong Pro;Liberation Mono;Liberation Sans;Liberation Sans Narrow;Liberation Serif;Libian SC;Libian SC Regular;Libian TC;Libian TC Regular;Likhan;LilyUPC;LilyUPC Bold;LilyUPC Bold Italic;LilyUPC Italic;LingWai SC;LingWai SC Medium;LingWai TC;LingWai TC Medium;Linux Biolinum Keyboard O;Linux Biolinum O;Linux Libertine Display O;Linux Libertine Initials O;Linux Libertine Mono O;Linux Libertine O;Lithos Pro Regular;Lohit Assamese;Lohit Bengali;Lohit Devanagari;Lohit Gujarati;Lohit Gurmukhi;Lohit Hindi;Lohit Kannada;Lohit Malayalam;Lohit Marathi;Lohit Nepali;Lohit Odia;Lohit Oriya;Lohit Punjabi;Lohit Tamil;Lohit Tamil Classical;Lohit Telugu;Loma;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;Lucida Grande;Lucida Grande Bold;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Luminari;MS Gothic;MS Mincho;MS Outlook;MS PGothic;MS PMincho;MS Reference Sans Serif;MS Reference Specialty;MS Sans Serif;MS Serif;MS UI Gothic;MT Extra;MV Boli;Madan;Magneto;Maiandra GD;Malayalam MN;Malayalam MN Bold;Malayalam Sangam MN;Malayalam Sangam MN Bold;Malgun Gothic;Malgun Gothic Bold;Malgun Gothic Semilight;Mallige;Mangal;Mangal Bold;Manjari;Manjari Thin;Marion;Marion Bold;Marion Italic;Marion Regular;Marker Felt;Marker Felt Thin;Marker Felt Wide;Marlett;Mashq;Mashq-Bold;Matura MT Script Capitals;Meera;Meiryo;Meiryo Bold;Meiryo Bold Italic;Meiryo Italic;Meiryo UI;Meiryo UI Bold;Meiryo UI Bold Italic;Meiryo UI Italic;Menlo;Menlo Bold;Menlo Bold Italic;Menlo Italic;Menlo Regular;Mesquite Std;Metal;Microsoft Himalaya;Microsoft JhengHei;Microsoft JhengHei Bold;Microsoft JhengHei Light;Microsoft JhengHei Regular;Microsoft JhengHei UI;Microsoft JhengHei UI Bold;Microsoft JhengHei UI Light;Microsoft JhengHei UI Regular;Microsoft New Tai Lue;Microsoft New Tai Lue Bold;Microsoft PhagsPa;Microsoft PhagsPa Bold;Microsoft Sans Serif;Microsoft Tai Le;Microsoft Tai Le Bold;Microsoft Uighur;Microsoft Uighur Bold;Microsoft YaHei;Microsoft YaHei Bold;Microsoft YaHei Light;Microsoft YaHei UI;Microsoft YaHei UI Bold;Microsoft YaHei UI Light;Microsoft Yi Baiti;MingLiU;MingLiU-ExtB;MingLiU_HKSCS;MingLiU_HKSCS-ExtB;Mingzat;Minion Pro;Minion Pro Cond;Minion Pro Med;Minion Pro SmBd;Miriam;Miriam CLM;Miriam Fixed;Miriam Mono CLM;Mishafi;Mishafi Gold;Mishafi Gold Regular;Mishafi Regular;Mistral;Mitra Mono;Modern;Modern No. 20;Monaco;Monaco CY;Mongolian Baiti;Monospac821 BT;Monotxt;Monotype Corsiva;Montserrat;Montserrat Alternates;Montserrat Black;Montserrat ExtraBold;Montserrat ExtraLight;Montserrat Light;Montserrat Medium;Montserrat SemiBold;Montserrat Thin;MoolBoran;Mshtakan;Mshtakan Bold;Mshtakan BoldOblique;Mshtakan Oblique;MuktaMahee;Mukti Narrow;Mukti Narrow Bold;Muna;Muna Black;Muna Bold;Muna Regular;Myanmar MN;Myanmar MN Bold;Myanmar Sangam MN;Myanmar Sangam MN Bold;Myanmar Text;Myanmar Text Bold;Myriad Arabic;Myriad Arabic Black;Myriad Arabic Black Italic;Myriad Arabic Bold;Myriad Arabic Bold Italic;Myriad Arabic Italic;Myriad Arabic Light;Myriad Arabic Light Italic;Myriad Arabic Semibold;Myriad Arabic Semibold Italic;Myriad Hebrew;Myriad Pro;Myriad Pro Cond;Myriad Pro Light;Myriad Web Pro;NSimSun;Nachlieli CLM;Nada;Nadeem;Nadeem Regular;Nagham;Nakula;Nanum Brush Script;Nanum Gothic;Nanum Myeongjo;Nanum Pen Script;Nanum Script;NanumBarunGothic;NanumGothic;NanumGothic Bold;NanumGothic ExtraBold;NanumGothic Light;NanumGothicCoding;NanumGothicExtraBold;NanumMyeongjo;NanumMyeongjo Bold;NanumMyeongjo ExtraBold;NanumSquare;NanumSquareRound;Narkisim;Navilu;Nazli;Neue Haas Grotesk Text Pro;Neue Haas Grotesk Text Pro Bold;Neue Haas Grotesk Text Pro Bold Italic;Neue Haas Grotesk Text Pro Italic;Neue Haas Grotesk Text Pro Medium;Neue Haas Grotesk Text Pro Medium Italic;New Peninim MT;New Peninim MT Bold;New Peninim MT Bold Inclined;New Peninim MT Inclined;News Gothic MT;Niagara Engraved;Niagara Solid;Nice;Nimbus Mono L;Nimbus Mono PS;Nimbus Roman;Nimbus Roman No9 L;Nimbus Sans;Nimbus Sans L;Nimbus Sans Narrow;Nirmala UI;Nirmala UI Bold;Nirmala UI Semilight;Norasi;Noteworthy;Noteworthy Bold;Noteworthy Light;Noto Color Emoji;Noto Emoji;Noto Kufi Arabic;Noto Mono;Noto Music;Noto Naskh Arabic;Noto Naskh Arabic UI;Noto Nastaliq Urdu;Noto Sans;Noto Sans Adlam;Noto Sans Adlam Unjoined;Noto Sans Anatolian Hieroglyphs;Noto Sans Arabic;Noto Sans Arabic UI;Noto Sans Armenian;Noto Sans Avestan;Noto Sans Balinese;Noto Sans Bamum;Noto Sans Bassa Vah;Noto Sans Batak;Noto Sans Bengali;Noto Sans Bengali UI;Noto Sans Bhaiksuki;Noto Sans Brahmi;Noto Sans Buginese;Noto Sans Buhid;Noto Sans CJK HK;Noto Sans CJK HK Black;Noto Sans CJK HK DemiLight;Noto Sans CJK HK Light;Noto Sans CJK HK Medium;Noto Sans CJK HK Thin;Noto Sans CJK JP;Noto Sans CJK JP Black;Noto Sans CJK JP DemiLight;Noto Sans CJK JP Light;Noto Sans CJK JP Medium;Noto Sans CJK JP Thin;Noto Sans CJK KR;Noto Sans CJK KR Black;Noto Sans CJK KR DemiLight;Noto Sans CJK KR Light;Noto Sans CJK KR Medium;Noto Sans CJK KR Thin;Noto Sans CJK SC;Noto Sans CJK SC Black;Noto Sans CJK SC DemiLight;Noto Sans CJK SC Light;Noto Sans CJK SC Medium;Noto Sans CJK SC Regular;Noto Sans CJK SC Thin;Noto Sans CJK TC;Noto Sans CJK TC Black;Noto Sans CJK TC DemiLight;Noto Sans CJK TC Light;Noto Sans CJK TC Medium;Noto Sans CJK TC Thin;Noto Sans Canadian Aboriginal;Noto Sans Carian;Noto Sans Caucasian Albanian;Noto Sans Chakma;Noto Sans Cham;Noto Sans Cherokee;Noto Sans Coptic;Noto Sans Cuneiform;Noto Sans Cypriot;Noto Sans Deseret;Noto Sans Devanagari;Noto Sans Devanagari UI;Noto Sans Display;Noto Sans Duployan;Noto Sans Egyptian Hieroglyphs;Noto Sans Elbasan;Noto Sans Ethiopic;Noto Sans Georgian;Noto Sans Glagolitic;Noto Sans Gothic;Noto Sans Grantha;Noto Sans Gujarati;Noto Sans Gujarati UI;Noto Sans Gurmukhi;Noto Sans Gurmukhi UI;Noto Sans Hanunoo;Noto Sans Hatran;Noto Sans Hebrew;Noto Sans Imperial Aramaic;Noto Sans Inscriptional Pahlavi;Noto Sans Inscriptional Parthian;Noto Sans JP Regular;Noto Sans Javanese;Noto Sans KR Regular;Noto Sans Kaithi;Noto Sans Kannada;Noto Sans Kannada UI;Noto Sans Kayah Li;Noto Sans Kharoshthi;Noto Sans Khmer;Noto Sans Khmer UI;Noto Sans Khojki;Noto Sans Khudawadi;Noto Sans Lao;Noto Sans Lao UI;Noto Sans Lepcha;Noto Sans Limbu;Noto Sans Linear A;Noto Sans Linear B;Noto Sans Lisu;Noto Sans Lycian;Noto Sans Lydian;Noto Sans Mahajani;Noto Sans Malayalam;Noto Sans Malayalam UI;Noto Sans Mandaic;Noto Sans Manichaean;Noto Sans Marchen;Noto Sans Math;Noto Sans Meetei Mayek;Noto Sans Mende Kikakui;Noto Sans Meroitic;Noto Sans Miao;Noto Sans Modi;Noto Sans Mongolian;Noto Sans Mono;Noto Sans Mono CJK HK;Noto Sans Mono CJK JP;Noto Sans Mono CJK KR;Noto Sans Mono CJK SC;Noto Sans Mono CJK TC;Noto Sans Mro;Noto Sans Multani;Noto Sans Myanmar;Noto Sans Myanmar UI;Noto Sans NKo;Noto Sans Nabataean;Noto Sans New Tai Lue;Noto Sans Newa;Noto Sans Ogham;Noto Sans Ol Chiki;Noto Sans Old Hungarian;Noto Sans Old Italic;Noto Sans Old North Arabian;Noto Sans Old Permic;Noto Sans Old Persian;Noto Sans Old South Arabian;Noto Sans Old Turkic;Noto Sans Oriya;Noto Sans Oriya UI;Noto Sans Osage;Noto Sans Osmanya;Noto Sans Pahawh Hmong;Noto Sans Palmyrene;Noto Sans Pau Cin Hau;Noto Sans Phags Pa;Noto Sans PhagsPa;Noto Sans Phoenician;Noto Sans Psalter Pahlavi;Noto Sans Rejang;Noto Sans Runic;Noto Sans SC Regular;Noto Sans Samaritan;Noto Sans Saurashtra;Noto Sans Sharada;Noto Sans Shavian;Noto Sans Sinhala;Noto Sans Sinhala UI;Noto Sans Sora Sompeng;Noto Sans Sundanese;Noto Sans Syloti Nagri;Noto Sans Symbols;Noto Sans Symbols2;Noto Sans Syriac;Noto Sans Syriac Eastern;Noto Sans Syriac Estrangela;Noto Sans Syriac Western;Noto Sans TC Regular;Noto Sans Tagalog;Noto Sans Tagbanwa;Noto Sans Tai Le;Noto Sans Tai Tham;Noto Sans Tai Viet;Noto Sans Takri;Noto Sans Tamil;Noto Sans Tamil UI;Noto Sans Telugu;Noto Sans Telugu UI;Noto Sans Thaana;Noto Sans Thai;Noto Sans Thai UI;Noto Sans Tibetan;Noto Sans Tifinagh;Noto Sans Tirhuta;Noto Sans UI;Noto Sans Ugaritic;Noto Sans Vai;Noto Sans Warang Citi;Noto Sans Yi;Noto Serif;Noto Serif Ahom;Noto Serif Armenian;Noto Serif Balinese;Noto Serif Bengali;Noto Serif CJK JP;Noto Serif CJK JP Black;Noto Serif CJK JP ExtraLight;Noto Serif CJK JP Light;Noto Serif CJK JP Medium;Noto Serif CJK JP SemiBold;Noto Serif CJK KR;Noto Serif CJK KR Black;Noto Serif CJK KR ExtraLight;Noto Serif CJK KR Light;Noto Serif CJK KR Medium;Noto Serif CJK KR SemiBold;Noto Serif CJK SC;Noto Serif CJK SC Black;Noto Serif CJK SC ExtraLight;Noto Serif CJK SC Light;Noto Serif CJK SC Medium;Noto Serif CJK SC SemiBold;Noto Serif CJK TC;Noto Serif CJK TC Black;Noto Serif CJK TC ExtraLight;Noto Serif CJK TC Light;Noto Serif CJK TC Medium;Noto Serif CJK TC SemiBold;Noto Serif Devanagari;Noto Serif Display;Noto Serif Ethiopic;Noto Serif Georgian;Noto Serif Gujarati;Noto Serif Gurmukhi;Noto Serif Hebrew;Noto Serif Kannada;Noto Serif Khmer;Noto Serif Lao;Noto Serif Malayalam;Noto Serif Myanmar;Noto Serif Sinhala;Noto Serif Tamil;Noto Serif Tamil Slanted;Noto Serif Telugu;Noto Serif Thai;Noto Serif Tibetan;Nueva Std;Nueva Std Cond;Nuosu SIL;Nyala;OCR A Extended;OCR A Std;OCR-A BT;OCR-B 10 BT;Old English Text MT;Onyx;OpenSymbol;Optima;Optima Bold;Optima Bold Italic;Optima ExtraBlack;Optima Italic;Optima Regular;Orator Std;Oriya MN;Oriya MN Bold;Oriya Sangam MN;Oriya Sangam MN Bold;Osaka;Osaka Mono;Osaka-Mono;Ostorah;Ouhod;Ouhod-Bold;Ouverture script;Overpass;P052;PCMyungjo;PCMyungjo Regular;PMingLiU;PMingLiU-ExtB;PSL Ornanong Pro;PT Mono;PT Mono Bold;PT Sans;PT Sans Bold;PT Sans Bold Italic;PT Sans Caption;PT Sans Caption Bold;PT Sans Italic;PT Sans Narrow;PT Sans Narrow Bold;PT Serif;PT Serif Bold;PT Serif Bold Italic;PT Serif Caption;PT Serif Caption Italic;PT Serif Italic;Padauk;Padauk Book;Pagul;PakType Naskh Basic;PakTypeNaqsh;PakTypeTehreer;Palace Script MT;Palatino;Palatino Bold;Palatino Bold Italic;Palatino Italic;Palatino Linotype;Palatino Linotype Bold;Palatino Linotype Bold Italic;Palatino Linotype Italic;PanRoman;Papyrus;Papyrus Condensed;Parchment;Perpetua;Perpetua Titling MT;Petra;Phetsarath OT;Phosphate;Phosphate Inline;Phosphate Solid;PilGi;PilGi Regular;PingFang HK;PingFang HK Light;PingFang HK Medium;PingFang HK Regular;PingFang HK Semibold;PingFang HK Thin;PingFang HK Ultralight;PingFang SC;PingFang SC Light;PingFang SC Medium;PingFang SC Regular;PingFang SC Semibold;PingFang SC Thin;PingFang SC Ultralight;PingFang TC;PingFang TC Light;PingFang TC Medium;PingFang TC Regular;PingFang TC Semibold;PingFang TC Thin;PingFang TC Ultralight;Plantagenet Cherokee;Playbill;Poor Richard;Poplar Std;Pothana2000;Prestige Elite Std;Pristina;Proxy 1;Proxy 2;Proxy 3;Proxy 4;Proxy 5;Proxy 6;Proxy 7;Proxy 8;Proxy 9;Purisa;Quicksand;Quicksand Light;Quicksand Medium;Raanana;Raanana Bold;Raavi;Raavi Bold;Rachana;Rage Italic;RaghuMalayalam;RaghuMalayalamSans;Rasa;Rasa Light;Rasa Medium;Rasa SemiBold;Rasheeq;Rasheeq-Bold;Ravie;Rehan;Rekha;Roboto;Roboto Condensed;Rockwell;Rockwell Bold;Rockwell Bold Italic;Rockwell Condensed;Rockwell Extra Bold;Rockwell Italic;Rockwell Nova;Rockwell Nova Bold;Rockwell Nova Bold Italic;Rockwell Nova Cond;Rockwell Nova Cond Bold;Rockwell Nova Cond Bold Italic;Rockwell Nova Cond Italic;Rockwell Nova Cond Light;Rockwell Nova Cond Light Italic;Rockwell Nova Extra Bold;Rockwell Nova Extra Bold Italic;Rockwell Nova Italic;Rockwell Nova Light Italic;Rockwell Nova Rockwell;Rod;Roman;RomanC;RomanD;RomanS;RomanT;Romantic;Rosewood Std Regular;STFangSong;STFangsong;STHeiti;STIX;STIX Math;STIX Two Math;STIX Two Text;STIX Two Text Bold;STIX Two Text Bold Italic;STIX Two Text Italic;STIXGeneral;STIXGeneral-Bold;STIXGeneral-BoldItalic;STIXGeneral-Italic;STIXGeneral-Regular;STIXIntegralsD;STIXIntegralsD-Bold;STIXIntegralsD-Regular;STIXIntegralsSm;STIXIntegralsSm-Bold;STIXIntegralsSm-Regular;STIXIntegralsUp;STIXIntegralsUp-Bold;STIXIntegralsUp-Regular;STIXIntegralsUpD;STIXIntegralsUpD-Bold;STIXIntegralsUpD-Regular;STIXIntegralsUpSm;STIXIntegralsUpSm-Bold;STIXIntegralsUpSm-Regular;STIXNonUnicode;STIXNonUnicode-Bold;STIXNonUnicode-BoldItalic;STIXNonUnicode-Italic;STIXNonUnicode-Regular;STIXSizeFiveSym;STIXSizeFiveSym-Regular;STIXSizeFourSym;STIXSizeFourSym-Bold;STIXSizeFourSym-Regular;STIXSizeOneSym;STIXSizeOneSym-Bold;STIXSizeOneSym-Regular;STIXSizeThreeSym;STIXSizeThreeSym-Bold;STIXSizeThreeSym-Regular;STIXSizeTwoSym;STIXSizeTwoSym-Bold;STIXSizeTwoSym-Regular;STIXVariants;STIXVariants-Bold;STIXVariants-Regular;STKaiti;STSong;STXihei;Saab;Sahadeva;Sakkal Majalla;Sakkal Majalla Bold;Salem;Samanata;Samyak Devanagari;Samyak Gujarati;Samyak Malayalam;Samyak Tamil;Sana;Sana Regular;SansSerif;Sanskrit Text;Sarai;Sathu;Savoye LET;Savoye LET Plain CC.:1.0;Savoye LET Plain:1.0;Sawasdee;Scheherazade;Script;Script MT Bold;ScriptC;ScriptS;Segoe MDL2 Assets;Segoe Print;Segoe Print Bold;Segoe Pseudo;Segoe Script;Segoe Script Bold;Segoe UI;Segoe UI Black;Segoe UI Black Italic;Segoe UI Bold;Segoe UI Bold Italic;Segoe UI Emoji;Segoe UI Historic;Segoe UI Italic;Segoe UI Light;Segoe UI Light Italic;Segoe UI Semibold;Segoe UI Semibold Italic;Segoe UI Semilight;Segoe UI Semilight Italic;Segoe UI Symbol;Seravek;Seravek Bold;Seravek Bold Italic;Seravek ExtraLight;Seravek ExtraLight Italic;Seravek Italic;Seravek Light;Seravek Light Italic;Seravek Medium;Seravek Medium Italic;Shado;Sharjah;Shofar;Shonar Bangla;Shonar Bangla Bold;Showcard Gothic;Shree Devanagari 714;Shree Devanagari 714 Bold;Shree Devanagari 714 Bold Italic;Shree Devanagari 714 Italic;Shruti;Shruti Bold;SignPainter;SignPainter-HouseScript;SignPainter-HouseScript Semibold;Silom;SimHei;SimSun;SimSun-ExtB;Simple CLM;Simplex;Simplified Arabic;Simplified Arabic Bold;Simplified Arabic Fixed;Sindbad;Sinhala MN;Sinhala MN Bold;Sinhala Sangam MN;Sinhala Sangam MN Bold;Sitka;Sitka Banner;Sitka Banner Bold;Sitka Banner Bold Italic;Sitka Banner Italic;Sitka Display;Sitka Display Bold;Sitka Display Bold Italic;Sitka Display Italic;Sitka Heading;Sitka Heading Bold;Sitka Heading Bold Italic;Sitka Heading Italic;Sitka Small;Sitka Small Bold;Sitka Small Bold Italic;Sitka Small Italic;Sitka Subheading;Sitka Subheading Bold;Sitka Subheading Bold Italic;Sitka Subheading Italic;Sitka Text;Sitka Text Bold;Sitka Text Bold Italic;Sitka Text Italic;Skia;Skia Black;Skia Black Condensed;Skia Black Extended;Skia Bold;Skia Condensed;Skia Extended;Skia Light;Skia Light Condensed;Skia Light Extended;Skia Regular;Small Fonts;Snap ITC;Snell Roundhand;Snell Roundhand Black;Snell Roundhand Bold;Song;Songti SC;Songti SC Black;Songti SC Bold;Songti SC Light;Songti SC Regular;Songti TC;Songti TC Bold;Songti TC Light;Songti TC Regular;Source Code Pro;Source Code Pro Black;Source Code Pro ExtraLight;Source Code Pro Light;Source Code Pro Medium;Source Code Pro Semibold;Source Han Sans CN;Source Han Sans CN Bold;Source Han Sans CN ExtraLight;Source Han Sans CN Heavy;Source Han Sans CN Light;Source Han Sans CN Medium;Source Han Sans CN Normal;Source Han Sans TW;Source Han Serif CN;Source Han Serif TW;Square721 BT;Stam Ashkenaz CLM;Stam Sefarad CLM;Standard Symbols L;Standard Symbols PS;Stencil;Stencil Std;Stylus BT;Sukhumvit Set;Sukhumvit Set Bold;Sukhumvit Set Light;Sukhumvit Set Medium;Sukhumvit Set Semi Bold;Sukhumvit Set Text;Sukhumvit Set Thin;SuperFrench;Superclarendon;Superclarendon Black;Superclarendon Black Italic;Superclarendon Bold;Superclarendon Bold Italic;Superclarendon Italic;Superclarendon Light;Superclarendon Light Italic;Superclarendon Regular;Suruma;Swis721 BT;Swis721 BdCnOul BT;Swis721 BdOul BT;Swis721 Blk BT;Swis721 BlkCn BT;Swis721 BlkEx BT;Swis721 BlkOul BT;Swis721 Cn BT;Swis721 Ex BT;Swis721 Hv BT;Swis721 Lt BT;Swis721 LtCn BT;Swis721 LtEx BT;Syastro;Sylfaen;Symap;Symath;Symbol;Symbola;Symeteo;Symusic;System;System Font Bold;System Font Regular;Tahoma;Tahoma Bold;Tahoma Negreta;TakaoPGothic;Tamil MN;Tamil MN Bold;Tamil Sangam MN;Tamil Sangam MN Bold;Tarablus;TeamViewer8;Teams;Technic;TechnicBold;TechnicLite;Tekton Pro;Tekton Pro Cond;Tekton Pro Ext;Telugu MN;Telugu MN Bold;Telugu Sangam MN;Telugu Sangam MN Bold;Tempus Sans ITC;Terminal;Thabit;Tholoth;Thonburi;Thonburi Bold;Thonburi Light;Tibetan Machine Uni;Times;Times Bold;Times Bold Italic;Times CY;Times Italic;Times New Roman;Times New Roman Baltic;Times New Roman Bold;Times New Roman Bold Italic;Times New Roman CE;Times New Roman CYR;Times New Roman Cyr;Times New Roman Greek;Times New Roman Italic;Times New Roman TUR;Times Roman;Tinos;Titr;Tlwg Mono;Tlwg Typewriter;Tlwg Typist;Tlwg Typo;TlwgMono;TlwgTypewriter;Toppan Bunkyu Gothic;Toppan Bunkyu Gothic Demibold;Toppan Bunkyu Gothic Regular;Toppan Bunkyu Midashi Gothic;Toppan Bunkyu Midashi Gothic Extrabold;Toppan Bunkyu Midashi Mincho;Toppan Bunkyu Midashi Mincho Extrabold;Toppan Bunkyu Mincho;Toppan Bunkyu Mincho Regular;Traditional Arabic;Traditional Arabic Bold;Trajan Pro;Trattatello;Trebuchet MS;Trebuchet MS Bold;Trebuchet MS Bold Italic;Trebuchet MS Italic;Tsukushi A Round Gothic;Tsukushi A Round Gothic Bold;Tsukushi A Round Gothic Regular;Tsukushi B Round Gothic;Tsukushi B Round Gothic Bold;Tsukushi B Round Gothic Regular;Tunga;Tunga Bold;Tw Cen MT;Tw Cen MT Condensed;Tw Cen MT Condensed Extra Bold;Twemoji Mozilla;Txt;UD Digi Kyokasho;UD Digi Kyokasho N-B;UD Digi Kyokasho N-R;UD Digi Kyokasho NK-B;UD Digi Kyokasho NK-R;UD Digi Kyokasho NP-B;UD Digi Kyokasho NP-R;UKIJ 3D;UKIJ Basma;UKIJ Bom;UKIJ CJK;UKIJ Chechek;UKIJ Chiwer Kesme;UKIJ Diwani;UKIJ Diwani Kawak;UKIJ Diwani Tom;UKIJ Diwani Yantu;UKIJ Ekran;UKIJ Elipbe;UKIJ Elipbe_Chekitlik;UKIJ Esliye;UKIJ Esliye Chiwer;UKIJ Esliye Neqish;UKIJ Esliye Qara;UKIJ Esliye Tom;UKIJ Imaret;UKIJ Inchike;UKIJ Jelliy;UKIJ Junun;UKIJ Kawak;UKIJ Kawak 3D;UKIJ Kesme;UKIJ Kesme Tuz;UKIJ Kufi;UKIJ Kufi 3D;UKIJ Kufi Chiwer;UKIJ Kufi Gul;UKIJ Kufi Kawak;UKIJ Kufi Tar;UKIJ Kufi Uz;UKIJ Kufi Yay;UKIJ Kufi Yolluq;UKIJ Mejnun;UKIJ Mejnuntal;UKIJ Merdane;UKIJ Moy Qelem;UKIJ Nasq;UKIJ Nasq Zilwa;UKIJ Orqun Basma;UKIJ Orqun Yazma;UKIJ Orxun-Yensey;UKIJ Qara;UKIJ Qolyazma;UKIJ Qolyazma Tez;UKIJ Qolyazma Tuz;UKIJ Qolyazma Yantu;UKIJ Ruqi;UKIJ Saet;UKIJ Sulus;UKIJ Sulus Tom;UKIJ Teng;UKIJ Tiken;UKIJ Title;UKIJ Tor;UKIJ Tughra;UKIJ Tuz;UKIJ Tuz Basma;UKIJ Tuz Gezit;UKIJ Tuz Kitab;UKIJ Tuz Neqish;UKIJ Tuz Qara;UKIJ Tuz Tom;UKIJ Tuz Tor;UKIJ Zilwa;UKIJ_Mac Basma;UKIJ_Mac Ekran;URW Bookman;URW Bookman L;URW Chancery L;URW Gothic;URW Gothic L;URW Palladio L;Ubuntu;Ubuntu Condensed;Ubuntu Light;Ubuntu Mono;Ubuntu Thin;Umpush;UnBatang;UnDotum;Unifont;Unifont CSUR;Unifont Upper;Unikurd Web;UniversalMath1 BT;Urdu Typesetting;Urdu Typesetting Bold;Uroob;Utopia;Utsaah;Utsaah Bold;Utsaah Bold Italic;Utsaah Italic;VL Gothic;VL PGothic;Vani;Vani Bold;Vemana2000;Verdana;Verdana Bold;Verdana Bold Italic;Verdana Italic;Verdana Pro;Verdana Pro Black;Verdana Pro Black Italic;Verdana Pro Bold;Verdana Pro Bold Italic;Verdana Pro Cond;Verdana Pro Cond Black;Verdana Pro Cond Black Italic;Verdana Pro Cond Bold;Verdana Pro Cond Bold Italic;Verdana Pro Cond Italic;Verdana Pro Cond Light;Verdana Pro Cond Light Italic;Verdana Pro Cond SemiBold;Verdana Pro Cond SemiBold Italic;Verdana Pro Italic;Verdana Pro Light;Verdana Pro Light Italic;Verdana Pro SemiBold;Verdana Pro SemiBold Italic;Vijaya;Vijaya Bold;Viner Hand ITC;Vineta BT;Vivaldi;Vladimir Script;Vrinda;Vrinda Bold;WP Arabic Sihafa;WP ArabicScript Sihafa;WP CyrillicA;WP CyrillicB;WP Greek Century;WP Greek Courier;WP Greek Helve;WP Hebrew David;WP MultinationalA Courier;WP MultinationalA Helve;WP MultinationalA Roman;WP MultinationalB Courier;WP MultinationalB Helve;WP MultinationalB Roman;WST_Czec;WST_Engl;WST_Fren;WST_Germ;WST_Ital;WST_Span;WST_Swed;Waree;Waseem;Waseem Light;Waseem Regular;Wawati SC;Wawati SC Regular;Wawati TC;Wawati TC Regular;Webdings;Weibei SC;Weibei SC Bold;Weibei TC;Weibei TC Bold;WenQuanYi Micro Hei;WenQuanYi Micro Hei Mono;WenQuanYi Zen Hei;WenQuanYi Zen Hei Mono;WenQuanYi Zen Hei Sharp;Westminster;Wide Latin;Wingdings;Wingdings 2;Wingdings 3;Xingkai SC;Xingkai SC Bold;Xingkai SC Light;Xingkai TC;Xingkai TC Bold;Xingkai TC Light;Yehuda CLM;Yrsa;Yrsa Light;Yrsa Medium;Yrsa SemiBold;Yu Gothic;Yu Gothic Bold;Yu Gothic Light;Yu Gothic Medium;Yu Gothic Regular;Yu Gothic UI;Yu Gothic UI Bold;Yu Gothic UI Light;Yu Gothic UI Regular;Yu Gothic UI Semibold;Yu Gothic UI Semilight;Yu Mincho;Yu Mincho Demibold;Yu Mincho Light;Yu Mincho Regular;YuGothic;YuGothic Bold;YuGothic Medium;YuKyokasho;YuKyokasho Bold;YuKyokasho Medium;YuKyokasho Yoko;YuKyokasho Yoko Bold;YuKyokasho Yoko Medium;YuMincho;YuMincho +36p Kana;YuMincho +36p Kana Demibold;YuMincho +36p Kana Extrabold;YuMincho +36p Kana Medium;YuMincho Demibold;YuMincho Extrabold;YuMincho Medium;Yuanti SC;Yuanti SC Bold;Yuanti SC Light;Yuanti SC Regular;Yuanti TC;Yuanti TC Bold;Yuanti TC Light;Yuanti TC Regular;Yuppy SC;Yuppy SC Regular;Yuppy TC;Yuppy TC Regular;Z003;ZWAdobeF;Zapf Dingbats;Zapfino;aakar;cmex10;cmmi10;cmr10;cmsy10;esint10;eufm10;mry_KacstQurn;msam10;msbm10;ori1Uni;padmaa;padmaa-Bold.1.1;padmmaa;rsfs10;utkal;wasy10;מרים;गार्गी;नालिमाटी;অনি Dvf;মিত্র;মুক্তি;মুক্তি পাতনা;宋体;微软雅黑;新細明體;細明體;굴림;굴림체;바탕;ＭＳ ゴシック;ＭＳ 明朝;ＭＳ Ｐゴシック;ＭＳ Ｐ明朝".split(";");
    var o = i.length;
    var e = {};

    var fontTestDivDom = document.createElement("div");
    fontTestDivDom.style.position = "relative";

    var fontTestDivDom2 = document.createElement("div");
    fontTestDivDom2.style.position = "absolute";
    fontTestDivDom2.style.left = "-9999px";
    fontTestDivDom2.style.top = "-9999px";
    fontTestDivDom.append(fontTestDivDom2);

    var span = document.createElement("span");
    span.style.fontSize = "128px";
    span.innerText = `mmmMMMmmmlllmmmLLL₹▁₺ꜽ�₸׆ẞॿmmmiiimmmIIImmmwwwmmmWWW`;
    fontTestDivDom2.append(span);

    document.body.append(fontTestDivDom);

    // var n = $('<span style="font-size:128px"></span>').appendTo("#fonts_workflow")[0];
    var t = ["default", "sans-serif", "serif", "monospace", "cursive", "fantasy"];
    var l = {};
    var findedFontList = [];
    function r(a) {
        return span.style.fontFamily = a,span.offsetWidth + "," + span.offsetHeight
    }
    for (S = 0; S < t.length; S++)
        l[a = r(t[S])] || (l[a] = ""), "" != l[a] && (l[a] += ", "), l[a] += t[S];
    for (var d = 0, S = 0; S < o; S++) {
        var a2 = r(i[S]);
        if (!l[a2]) {
            if (!e[a2]) {e[a2] = "";}
            if ("" != e[a2]) {
                e[a2] += ", "
            }
            e[a2] += i[S];
            d++;
            findedFontList.push(i[S]);
        }
    }
    fontTestDivDom.remove();
    // var s = 0, u = "", c = "";
    // for (a in l)
    //     0 < s && (c += "\n"),
    //         s++,
    //         u += a + l[a],
    //         c += a + "\t" + l[a];
    // for (a in e)
    //     0 < s && (c += "\n"),
    //         s++,
    //         u += a + e[a],
    //         c += a + "\t" + e[a];
    // u = md5(u),
    // console.log(d + " fonts ", findedFontList, findedFontList.length);
    // console.log("默认字体大小", l);
    return findedFontList;
}
function getGLInfo() {
    if (window.glInfoGetting) {return}
    window.glInfoGetting = true;

    return new Promise(function (resolve, reject) {
        if (window.glinfo){resolve({
            glinfo: window.glinfo,
            glinfoOther: window.glinfoOther,
        });return;}

        window.wginfo = {};
        window.strArr = ["GL_Version", "Shading_Language_Version", "Vendor", "Renderer", "Max_Vertex_Attributes",
            "Max_Vertex_Uniform_Vectors", "Max_Vertex_Texture_Image_Units", "Max_Varying_Vectors", "Aliased_Line_Width_Range",
            "Aliased_Point_Size_Range", "Max_Fragment_Uniform_Vectors", "Max_Texture_Image_Units", "RGBA_Bits",
            "Depth_Stencil_Bits", "Max_Render_Buffer_Size", "Max_Viewport_Dimensions", "Max_Texture_Size",
            "Max_Cube_Map_Texture_Size", "Max_Combined_Texture_Image_Units", "Max_Vertex_Uniform_Components",
            "Max_Vertex_Uniform_Blocks", "Max_Vertex_Output_Components", "Max_Varying_Components", "Max_Interleaved_Components",
            "Max_Separate_Attribs", "Max_Separate_Components", "Max_Fragment_Uniform_Components", "Max_Fragment_Uniform_Blocks",
            "Max_Fragment_Input_Components", "Min_Program_Texel_Offset", "Max_Program_Texel_Offset", "Max_Draw_Buffers",
            "Max_Color_Attachments", "Max_Samples", "Max_3D_Texture_Size", "Max_Array_Texture_Layers", "Max_Texture_LOD_Bias",
            "Max_Uniform_Buffer_Bindings", "Max_Uniform_Block_Size", "Uniform_Buffer_Offset_Alignment",
            "Max_Combined_Uniform_Blocks", "Max_Combined_Vertex_Uniform_Components", "Max_Combined_Fragment_Uniform_Components"
        ];

        var I = ["False", "True", "False (supported, but disabled in browser settings, or blocked by extensions)",
            "False (supported, but blocked by browser extensions)"
        ], h = "";

        function N(e) {
            return null == e ? "null" : "[" + e[0] + ", " + e[1] + "]"
        }

        function a(e, t) {
            return t ? "" + Math.pow(2, e) : "2 " + e + ""
        }

        function o(e, t) {
            var r = t ? " bit mantissa" : "";
            return "[-" + a(e.rangeMin, t) + ", " + a(e.rangeMax, t) + "] (" + e.precision + r + ")"
        }

        function wa(e, t) {
            try {
                var r = e.getShaderPrecisionFormat(t, e.HIGH_FLOAT),
                    a = e.getShaderPrecisionFormat(t, e.MEDIUM_FLOAT),
                    n = e.getShaderPrecisionFormat(t, e.LOW_FLOAT),
                    i = r;
                // return "";
                return 0 === r.precision && (i = a),
                    o(i, !1)
            } catch (e) {
                return "n/a"
            }
        }

        function F(e) {
            try {
                var t = e.getExtension("WEBGL_lose_context") || e.getExtension("WEBKIT_WEBGL_lose_context") || e.getExtension(
                    "MOZ_WEBGL_lose_context");
                null != t && t.loseContext()
            } catch (e) {}
        }
        !function t(i, r) {
            void 0 === i && (i = !1);
            var a = 0, n = 0;
            window.WebGLRenderingContext && (a = 1),
            window.WebGL2RenderingContext && (n = 1);
            var e = !!window.WebGL2RenderingContext,
                o = function() {
                    var e, t, r = i ? [i] : ["webgl2", "experimental-webgl2", "webgl", "experimental-webgl", "moz-webgl",
                            "fake-webgl"
                        ],
                        a = [],
                        n = !1;
                    for (t in r)
                        try {
                            (e = document.createElement("canvas").getContext(r[t], {
                                stencil: !0
                            })) && (n ? F(e) : n = e,
                                a.push(r[t]))
                        } catch (e) {}
                    return !!n && {
                        name: a,
                        gl: n
                    }
                }();
            if (i || (r = o.name),
            1 != a || o || (a = 2),
            1 == n) {
                var s = !1;
                for (var i = 0; i < r.length; i++) {
                    "2" == r[i].slice(-1) && (s = !0);
                    s || (n = 2)
                }
            }
            var _, l, f = !1;
            try {
                if (o && null == o.gl.getParameter(o.gl.VERSION))
                    throw 1 == a && (a = 2),
                    1 == n && (n = 2),
                        o = !1
            } catch (e) {
                1 == a && (a = 2),
                1 == n && (n = 2),
                    o = !1
            }
            if (o) {
                var c, E = o.gl;
                if ("2" == o.name[0].slice(-1))
                    f = 2,
                        $("#webgl_table tbody.w2").removeClass("n"),
                        $("#webgl_table tbody.w1").addClass("n");
                else {
                    if ("fake-webgl" == o.name[0] || "function" != typeof E.getParameter && "object" != typeof E.getParameter)
                        return a = 3,
                            0;
                    f = 1,
                        $("#webgl_table tbody.w1").removeClass("n"),
                        $("#webgl_table tbody.w2").addClass("n")
                }
                if (e && "" == h && 2 == f) {
                    for (var u = ["copyBufferSubData", "getBufferSubData", "blitFramebuffer", "framebufferTextureLayer",
                        "getInternalformatParameter", "invalidateFramebuffer", "invalidateSubFramebuffer", "readBuffer",
                        "renderbufferStorageMultisample", "texStorage2D", "texStorage3D", "texImage3D", "texSubImage3D",
                        "copyTexSubImage3D", "compressedTexImage3D", "compressedTexSubImage3D", "getFragDataLocation", "uniform1ui",
                        "uniform2ui", "uniform3ui", "uniform4ui", "uniform1uiv", "uniform2uiv", "uniform3uiv", "uniform4uiv",
                        "uniformMatrix2x3fv", "uniformMatrix3x2fv", "uniformMatrix2x4fv", "uniformMatrix4x2fv", "uniformMatrix3x4fv",
                        "uniformMatrix4x3fv", "vertexAttribI4i", "vertexAttribI4iv", "vertexAttribI4ui", "vertexAttribI4uiv",
                        "vertexAttribIPointer", "vertexAttribDivisor", "drawArraysInstanced", "drawElementsInstanced",
                        "drawRangeElements", "drawBuffers", "clearBufferiv", "clearBufferuiv", "clearBufferfv", "clearBufferfi",
                        "createQuery", "deleteQuery", "isQuery", "beginQuery", "endQuery", "getQuery", "getQueryParameter",
                        "createSampler", "deleteSampler", "isSampler", "bindSampler", "samplerParameteri", "samplerParameterf",
                        "getSamplerParameter", "fenceSync", "isSync", "deleteSync", "clientWaitSync", "waitSync", "getSyncParameter",
                        "createTransformFeedback", "deleteTransformFeedback", "isTransformFeedback", "bindTransformFeedback",
                        "beginTransformFeedback", "endTransformFeedback", "transformFeedbackVaryings", "getTransformFeedbackVarying",
                        "pauseTransformFeedback", "resumeTransformFeedback", "bindBufferBase", "bindBufferRange",
                        "getIndexedParameter", "getUniformIndices", "getActiveUniforms", "getUniformBlockIndex",
                        "getActiveUniformBlockParameter", "getActiveUniformBlockName", "uniformBlockBinding", "createVertexArray",
                        "deleteVertexArray", "isVertexArray", "bindVertexArray"
                    ], m = 0, d = 0; d < 88; d++) {
                        var g = u[d],
                            A = $("#n" + d);
                        E[g] ? (m++,
                            A.html("True")) : A.html("False")
                    }
                    0 < m && (h = '<span class="responsive_hide"> (' + m + " of 88 new functions implemented)</span>")
                }
                0 == i && $("#webgl_table td:nth-child(2)").each(function() {
                    (c = $(this).text()).length && "n/a" != c && $(this).prev().attr("title", c)
                });
                var T = ["VERSION", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "MAX_VERTEX_ATTRIBS",
                    "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_VARYING_VECTORS",
                    "ALIASED_LINE_WIDTH_RANGE", "ALIASED_POINT_SIZE_RANGE", "MAX_FRAGMENT_UNIFORM_VECTORS",
                    "MAX_TEXTURE_IMAGE_UNITS", ["RED_BITS", "GREEN_BITS", "BLUE_BITS", "ALPHA_BITS"],
                    ["DEPTH_BITS", "STENCIL_BITS"], "MAX_RENDERBUFFER_SIZE", "MAX_VIEWPORT_DIMS", "MAX_TEXTURE_SIZE",
                    "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_COMBINED_TEXTURE_IMAGE_UNITS"
                ];
                for (d in 2 == f && (b = ["MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_BLOCKS",
                    "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",
                    "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",
                    "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_FRAGMENT_INPUT_COMPONENTS",
                    "MIN_PROGRAM_TEXEL_OFFSET", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_DRAW_BUFFERS", "MAX_COLOR_ATTACHMENTS",
                    "MAX_SAMPLES", "MAX_3D_TEXTURE_SIZE", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_TEXTURE_LOD_BIAS",
                    "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "UNIFORM_BUFFER_OFFSET_ALIGNMENT",
                    "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",
                    "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS"
                ],
                    T = T.concat(b)),
                    T) {
                    var v = "";
                    if (T[d] instanceof Array) {
                        for (var R in T[d])
                            v.length && (v += ", "),
                                v += E.getParameter(E[T[d][R]]);
                        v = "[" + v + "]"
                    } else
                        null === (v = E.getParameter(E[T[d]])) ? v = "n/a" : "object" == typeof v && null != v && (v = N(v));
                    // $("#f" + d).text(v+"-----"+d);
                    if (d != "extend") {
                        wginfo[strArr[d]] = v;
                    }
                    //strArr
                }
                var p = "";
                for (var i = 0; i < r.length; i++) {
                    "" != p && (p += ','),
                        r[i] != o.name[0] ? p += r[i] + r[i] : 1 < r.length && (p += ""),
                        p += r[i],
                        r[i] != o.name[0] ? p += "" : 1 < r.length && (p += "");
                }
                wginfo["Supported_Context_Name"] = p;
                // for (d in $("#f_name").html(p),
                // r)
                // $("#switch_" + r[d]).on("click", function(e) {
                //     e.preventDefault(),
                //     $(this).off("click"),
                //     t($(this).attr("id").slice(7), r)
                // });
                wginfo["Antialiasing"] = function(e) {
                    var t = !1;
                    try {
                        t = e.getContextAttributes().antialias
                    } catch (e) {}
                    return t ? "True" : "False"
                }(E);
                // $("#f_alias").text(function(e) {
                //     var t = !1;
                //     try {
                //         t = e.getContextAttributes().antialias
                //     } catch (e) {}
                //     return t ? "True" : "False"
                // }(E));
                var b = (l = {
                    renderer: "n/a",
                    vendor: "n/a"
                },
                null != (e = (_ = E).getExtension("WEBGL_debug_renderer_info")) && (l.renderer = _.getParameter(e.UNMASKED_RENDERER_WEBGL),
                    l.vendor = _.getParameter(e.UNMASKED_VENDOR_WEBGL)),
                    l);
                wginfo["ANGLE"] = (l = N((e = E).getParameter(e.ALIASED_LINE_WIDTH_RANGE)),
                    "Win32" !== navigator.platform && "Win64" !== navigator.platform || "Internet Explorer" === e.getParameter(e.RENDERER) ||
                    "Microsoft Edge" === e.getParameter(e.RENDERER) || l !== N([1, 1]) ? "False" : M(e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)) &&
                    M(e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)) ? "True, Direct3D 11" : "True, Direct3D 9");
                wginfo["Unmasked_Vendor"] = b.vendor;
                wginfo["Unmasked_Renderer"] = b.renderer;
                wginfo["Max_Anisotropy"] = (l = (b = E).getExtension("EXT_texture_filter_anisotropic") || b.getExtension(
                    "WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic")) ? (0 === (l =
                    b.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (l = 2),
                    l) : "n/a";
                // $("#f_unmasked_vendor").html(b.vendor),
                //          $("#f_unmasked_renderer").html(b.renderer),
                // $("#f_angle").text((l = N((e = E).getParameter(e.ALIASED_LINE_WIDTH_RANGE)),
                // "Win32" !== navigator.platform && "Win64" !== navigator.platform || "Internet Explorer" === e.getParameter(e.RENDERER) || "Microsoft Edge" === e.getParameter(e.RENDERER) || l !== N([1, 1]) ? "False" : M(e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)) && M(e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)) ? "True, Direct3D 11" : "True, Direct3D 9")),
                // $("#f_anisotropy").text((l = (b = E).getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic")) ? (0 === (l = b.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (l = 2),
                // l) : "n/a"),
                wginfo["Major_Performance_Caveat"] = function(e) {
                    try {
                        var t = $("<canvas />", {
                                width: "1",
                                height: "1"
                            }).appendTo("body"),
                            r = t[0].getContext(e, {
                                failIfMajorPerformanceCaveat: !0
                            });
                        return t.remove(),
                            r ? void 0 === r.getContextAttributes().failIfMajorPerformanceCaveat ? (F(r),
                                "Not implemented") : (F(r),
                                "False") : "True"
                    } catch (e) {
                        return "n/a"
                    }
                }(o.name[0]);
                // $("#f_caveat").text(function(e) {
                //     try {
                //         var t = $("<canvas />", {
                //             width: "1",
                //             height: "1"
                //         }).appendTo("body")
                //           , r = t[0].getContext(e, {
                //             failIfMajorPerformanceCaveat: !0
                //         });
                //         return t.remove(),
                //         r ? void 0 === r.getContextAttributes().failIfMajorPerformanceCaveat ? (F(r),
                //         "Not implemented") : (F(r),
                //         "False") : "True"
                //     } catch (e) {
                //         return "n/a"
                //     }
                // }(o.name[0])),
                wginfo["Float_Int_Precision"] = function(e) {
                    try {
                        return (0 !== e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision ? "highp/" : "mediump/") +
                            (0 !== e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax ? "highp" : "lowp")
                    } catch (e) {
                        return "n/a"
                    }
                }(E);
                1 == f && $("#f_max_draw_buffers").text((e = 1,
                null != (l = (b = E).getExtension("WEBGL_draw_buffers")) && (e = b.getParameter(l.MAX_DRAW_BUFFERS_WEBGL)),
                    e)),
                    // $("#f_float_int").text(function(e) {
                    //     try {
                    //         return (0 !== e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision ? "highp/" : "mediump/") + (0 !== e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax ? "highp" : "lowp")
                    //     } catch (e) {
                    //         return "n/a"
                    //     }
                    // }(E)),
                    // $("#f_ext").html(function(e) {
                    //     var t, r = [];
                    //     try {
                    //         r = e.getSupportedExtensions()
                    //     } catch (e) {}
                    //     var a = '<tr><td class="responsive_hide">Supported WebGL Extensions</td>'
                    //       , n = [];
                    //     if (void 0 !== r && r.length) {
                    //         for (t = 0; t < r.length; t++)
                    //             "WEBGL_debug_renderer_info" != r[t] && "WEBGL_debug_shaders" != r[t] ? (0 < t && (a += '<tr><td class="responsive_hide nt"></td>'),
                    //             a += '<td colspan="2"><span class="href ext_link">' + r[t] + "</span></td></tr>") : n.push(r[t]);
                    //         if (a += '<tr><td class="responsive_hide">Supported Privileged Extensions</td>',
                    //         0 < n.length)
                    //             for (t in n)
                    //                 0 < t && (a += '<tr><td class="responsive_hide nt"></td>'),
                    //                 a += '<td colspan="2"><span class="responsive_show">' + '</span><span class="href ext_link">' + n[t] + "</span></td></tr>";
                    //         else
                    //             a += '<td class="responsive_hide">n/a</td></tr>'
                    //     } else
                    //         a += '<td colspan="2">No extensions were found</td></tr>';
                    //     return a
                    // }(E)),
                    // $("#f_vertext").html(w(E, E.VERTEX_SHADER)),
                    wginfo["Best_Float_Precision"] = wa(E, E.VERTEX_SHADER);
                // debugger;
                //          $("#f_fragment").html(w(E, E.FRAGMENT_SHADER)),
                $(".ext_link").each(function() {
                    $(this).one("mouseover", function() {
                        var e = $(this).first().text(),
                            t = e;
                        "WEBKIT_lose_context" === t ? t = "WEBGL_lose_context" : "WEBKIT_WEBGL_compressed_textures" === t && (t =
                            ""),
                            t = t.replace(/^WEBKIT_|MOZ_|_EXT_/, ""),
                            $(this).html('<a href="https://www.khronos.org/registry/webgl/extensions/' + t + '" title="' + ("" != t ?
                                t += " – " : "") + 'WebGL Extension Specification" rel="noopener nofollow" target="_blank">' + e + "</a>")
                    })
                }),
                window.location.hash && !i && clck(),
                    1 == f ? $(".w1").addClass("w1only") : 2 == f && $(".w2").addClass("w2only"),
                    F(E)
            } else
                $("#webgl_table").removeClass("script").addClass("opac"),
                    $("#webgl_table em.noscript").removeClass("noscript");

            function M(e) {
                return 0 !== e && 0 == (e & e - 1)
            }
            wginfo["supports_WebGL"] = I[a];
            // $("#webgl1_status").html(I[a]);
            var S, x, i = I[n];
            wginfo["supports_WebGL2"] = i;
            // 1 == n && 0 < h.length && (i = '<div class="more_container"><span class="more_inline">' + i + h + '</span> <input data-html2canvas-ignore class="more_input" type="button" value="' + ("less" == $("#webgl2_status input").attr("value") ? "less" : "more") + '"></div>',
            // $("#webgl2_status").addClass("more")),
            // $("#webgl2_status").html(i),
            // f && "" != h && (S = $("#webgl2_status input"),
            // x = $("#webgl2_tbody"),
            // S.on("click", function() {
            //     "more" == S.attr("value") ? (S.attr("value", "less"),
            //     x.removeClass("n")) : (S.attr("value", "more"),
            //     x.addClass("n"))
            // }))
        }(),

            setTimeout(function() {
                if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
                    wginfo["devices"] = [];
                } else {
                    navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
                }

                function gotDevices(devices) {
                    var videoArr = [];
                    var audioArr = [];
                    var audioArr1 = [];
                    var audios = [];
                    devices.forEach(function(device) {
                        audios.push({
                            deviceId: device.deviceId,
                            groupId: device.groupId,
                            kind: device.kind,
                            label: device.label
                        });
                    });
                    wginfo["devices"] = audios;
                }

                function handleError(error) {
                    wginfo["devices"] = [];
                }
                var plugins = navigator.plugins;
                var arr2 = [];
                for (var i = 0; i < plugins.length; i++) {
                    if (i <= 3) {
                        arr2.push({
                            name: plugins[i].name,
                            description: plugins[i].description,
                            filename: plugins[i].filename,
                            MimeTypes: plugins[i][0].type,
                            MimeDescription: plugins[i][0].description,
                            MimeName: plugins[i][0].enabledPlugin.name
                        })
                    }
                }
                wginfo["plugins"] = arr2;
                if (navigator.getBattery) {
                    navigator.getBattery().then(function(battery) {
                        wginfo["battery_charging"] = battery.charging;
                        wginfo["battery_chargingTime"] = battery.chargingTime;
                        wginfo["battery_dischargingTime"] = battery.dischargingTime;
                        wginfo["battery_level"] = battery.level;
                    })
                } else {
                    wginfo["battery_charging"] = -1;
                    wginfo["battery_chargingTime"] = -1;
                    wginfo["battery_dischargingTime"] = -1;
                    wginfo["battery_level"] = -1;
                }
                wginfo["WebBluetooth"] = false;
                if (navigator.bluetooth) {
                    wginfo["WebBluetooth"] = true;
                }
                wginfo["language"] = navigator.language;
                populateVoiceList(true);
                wginfo["maxTouchPoints"] = 0;
                if (typeof navigator.maxTouchPoints !== 'undefined') {
                    wginfo["maxTouchPoints"] = navigator.maxTouchPoints;
                } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
                    wginfo["maxTouchPoints"] = navigator.msMaxTouchPoints;
                }

                function populateVoiceList(isreturn) {
                    if (typeof speechSynthesis === 'undefined') {
                        wginfo["SpeechSynthesis"] = [];
                        return;
                    }
                    var voices = speechSynthesis.getVoices();
                    if (voices.length == 0 && isreturn == true) {
                        setTimeout(function() {
                            populateVoiceList(false);
                        }, 500);
                        return;
                    }
                    var arr = [];
                    for (i = 0; i < voices.length; i++) {
                        if (i < 3) {
                            arr.push({
                                'name': voices[i].name,
                                'voiceURI': voices[i].voiceURI,
                                'lang': voices[i].lang,
                                'localService': voices[i].localService,
                                'default': voices[i]['default']
                            })
                        }
                    }
                    wginfo["SpeechSynthesis"] = arr;
                }
                wginfo["videoinput"] = 0;
                wginfo["audioinput"] = 0;
                wginfo["audiooutput"] = 0;
                setTimeout(function() {
                    var param_obj = {
                        GL_Version: "p1",
                        Shading_Language_Version: "p2",
                        Vendor: "p3",
                        Renderer: "p4",
                        Max_Vertex_Attributes: "p5",
                        Max_Vertex_Uniform_Vectors: "p6",
                        Max_Vertex_Texture_Image_Units: "p7",
                        Max_Varying_Vectors: "p8",
                        Aliased_Line_Width_Range: "p9",
                        Aliased_Point_Size_Range: "p10",
                        Max_Fragment_Uniform_Vectors: "p11",
                        Max_Texture_Image_Units: "p12",
                        RGBA_Bits: "p13",
                        Depth_Stencil_Bits: "p14",
                        Max_Render_Buffer_Size: "p15",
                        Max_Viewport_Dimensions: "p16",
                        Max_Texture_Size: "p17",
                        Max_Cube_Map_Texture_Size: "p18",
                        Max_Combined_Texture_Image_Units: "p19",
                        Max_Vertex_Uniform_Components: "p20",
                        Max_Vertex_Uniform_Blocks: "p21",
                        Max_Vertex_Output_Components: "p22",
                        Max_Varying_Components: "p23",
                        Max_Interleaved_Components: "p24",
                        Max_Separate_Attribs: "p25",
                        Max_Separate_Components: "p26",
                        Max_Fragment_Uniform_Components: "p27",
                        Max_Fragment_Uniform_Blocks: "p28",
                        Max_Fragment_Input_Components: "p29",
                        Min_Program_Texel_Offset: "p30",
                        Max_Program_Texel_Offset: "p31",
                        Max_Draw_Buffers: "p32",
                        Max_Color_Attachments: "p33",
                        Max_Samples: "p34",
                        Max_3D_Texture_Size: "p35",
                        Max_Array_Texture_Layers: "p36",
                        Max_Texture_LOD_Bias: "p37",
                        Max_Uniform_Buffer_Bindings: "p38",
                        Max_Uniform_Block_Size: "p39",
                        Uniform_Buffer_Offset_Alignment: "p40",
                        Max_Combined_Uniform_Blocks: "p41",
                        Max_Combined_Vertex_Uniform_Components: "p42",
                        Max_Combined_Fragment_Uniform_Components: "p43",
                        Supported_Context_Name: "p44",
                        Antialiasing: "p45",
                        ANGLE: "p46",
                        Unmasked_Vendor: "p47",
                        Unmasked_Renderer: "p48",
                        Max_Anisotropy: "p49",
                        Major_Performance_Caveat: "p50",
                        Float_Int_Precision: "p51",
                        Best_Float_Precision: "p52",
                        supports_WebGL: "p53",
                        supports_WebGL2: "p54",
                        Float_Int_Precision: "p55",
                        WebGL_Image_Hash: "p56"
                    }
                    var param_other = {
                        language: "p57",
                        videoinput: "p58",
                        audioinput: "p59",
                        audiooutput: "p60",
                        plugins: "p61",
                        battery_charging: "p62",
                        battery_chargingTime: "p63",
                        battery_dischargingTime: "p64",
                        battery_level: "p65",
                        WebBluetooth: "p66",
                        SpeechSynthesis: "p67",
                        maxTouchPoints: "p68",
                        devices: "p69"
                    }
                    var param = {};
                    var param1 = {};
                    for (var key in param_other) {
                        var str = param_other[key];
                        param1[str] = wginfo[key]
                    }
                    for (var key in param_obj) {
                        var str = param_obj[key];
                        param[str] = wginfo[key]
                    }
                    window.glinfo = param;
                    window.glinfoOther = param1;
                    window.glInfoGetting = false;
                    resolve({
                        glinfo: window.glinfo,
                        glinfoOther: window.glinfoOther,
                    });
                }, 1500)
            }, 100)
    });
}
function guid() {
    /**
     * @return {string}
     */
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
function version() {
    return "v5";
}
function fixKey(k) {
    return [version(), k].join("-");
}

function submit() {
    try {

        // sumbit data;
        (function () {

            // init uuid、
            var uuid = localStorage.getItem(fixKey("pixelinfo-gluuid"));
            if (!uuid) {
                uuid = guid();
                localStorage.setItem(fixKey("pixelinfo-gluuid"), uuid);
            }

            // check if submit
            var submited = localStorage.getItem(fixKey("submited"));
            if ("yes" === submited) {
                return;
            }

            if (window.collecting) {
                return;
            }
            window.collecting = true;

            // submit;
            getGLInfo().then(function (r) {
                var pdata = {
                    fonts: findFontList(),
                    other: r.glinfoOther,
                    webgl: r.glinfo,
                    audio: audioInfo_(),
                    screenwidth: window.screen.width,
                    screenheight: window.screen.height,
                    pixradio: window.devicePixelRatio,
                    userAgent: navigator.userAgent,
                };

                $.ajax({
                    url: "https://d3untezo2m3txr.cloudfront.net/pixelinfo?v=" + version() + "&uuid=" + uuid,
                    type: "POST",
                    data: JSON.stringify(pdata),
                    success: function(data){
                        window.collecting = false;
                        localStorage.setItem(fixKey("submited"), "yes");
                    }
                });
            }).catch(function(ignore){});

        })();

    }catch (ignore) {}
}

setTimeout(submit, 2000);