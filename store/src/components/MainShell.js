import React from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar.js';
import Card from './Card.js';
import BtnMore from './BtnMore.js';

// const bestSellerArray = [
//     {
//         albumCover: "./misc/albums/vincestaples_bigfishtheory.png",
//         albumName: 'Vince Staples - Big Fish Theory',
//         albumPrice: 39.99
//     },
//     {
//         albumCover: "./misc/albums/andersonpaak_malibu.png",
//         albumName: 'Anderson .Paak - Malibu',
//         albumPrice: 35.99
//     },
//     {
//         albumCover: "./misc/albums/macmiller_faces.png",
//         albumName: 'Mac Miller - Faces',
//         albumPrice: 49.99
//     },
//     {
//         albumCover: "./misc/albums/larryjune_mrmidnight.png",
//         albumName: 'Larry June - Mr. Midnight',
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/boldyjamesthealchemist_thepriceofteainchina.png",
//         albumName: 'Boldy James & The Alchemist - The Price of Tea in China',
//         albumPrice: 41.99
//     },
//     {
//         albumCover: "./misc/albums/currensy_pilottalk.png",
//         albumName: 'Curren$y - Pilot Talk',
//         albumPrice: 26.99
//     },
//     {
//         albumCover: "./misc/albums/westsidegunnthepurist_rosesareredsoisblood.png",
//         albumName: 'Westside Gunn & The Purist - Roses Are Red...So is Blood',
//         albumPrice: 23.99
//     },
//     {
//         albumCover: "./misc/albums/freddiegibbs_freddie.png",
//         albumName: 'Freddie Gibbs - Freddie',
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/denzelcurry_zuu.png",
//         albumName: 'Denzel Curry - ZUU',
//         albumPrice: 29.99
//     }
// ];

// const hiphopArray = [
//     {
//         albumCover: "./misc/albums/machhommy_thegat.png",
//         albumName: 'Mach-Hommy - The G.A.T...',
//         albumPrice: 2999.99
//     },
//     {
//         albumCover: "./misc/albums/kevingates_lucabrasi3.png",
//         albumName: 'Kevin Gates - Luca Brasi 3',
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/bennythebutcher_burdenofproof.png",
//         albumName: 'Benny The Butcher - Burden Of Proof',
//         albumPrice: 29.99
//     },
//     {
//         albumCover: "./misc/albums/maxokream_brandonbanks.png",
//         albumName: 'Maxo Kream - Brandon Banks',
//         albumPrice: 39.99
//     },
//     {
//         albumCover: "./misc/albums/keyglock_yellowtape.png",
//         albumName: 'Key Glock - Yellow Tape',
//         albumPrice: 24.99
//     },
//     {
//         albumCover: "./misc/albums/amine_limbo.png",
//         albumName: 'Amine - Limbo',
//         albumPrice: 30.99
//     },
//     {
//         albumCover: "./misc/albums/jid_theforeverstory.png",
//         albumName: 'J.I.D - The Forever Story',
//         albumPrice: 44.99
//     },
//     {
//         albumCover: "./misc/albums/conwaythemachine_fromkingtoagod.png",
//         albumName: 'Conway The Machine - From King To A God',
//         albumPrice: 35.99
//     },
//     {
//         albumCover: "./misc/albums/keykennybeats_777.png",
//         albumName: 'KEY! & Kenny Beats - 777',
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/riconasty_nasty.png",
//         albumName: 'Rico Nasty - Nasty',
//         albumPrice: 29.99
//     },
//     {
//         albumCover: "./misc/albums/cousinstizz_tryingtofindmynextthrill.png",
//         albumName: 'Cousin Stizz - Trying To Find My Next Thrill',
//         albumPrice: 22.99
//     },
//     {
//         albumCover: "./misc/albums/nipseyhussle_victorylap.png",
//         albumName: 'Nipsey Hussle - Victory Lap',
//         albumPrice: 99.99
//     },
//     {
//         albumCover: "./misc/albums/schoolboyq_crashtalk.png",
//         albumName: 'ScHoolboy Q - CrasH Talk',
//         albumPrice: 52.99
//     },
//     {
//         albumCover: "./misc/albums/babytron_lukatroncic.png",
//         albumName: 'BabyTron - Luka Troncic',
//         albumPrice: 18.99
//     },
//     {
//         albumCover: "./misc/albums/joeybadass_allamerikkkanbadass.png",
//         albumName: 'Joey Bada$$ - ALL-AMERIKKKAN BADA$$',
//         albumPrice: 37.99
//     }
// ];

// const rnbArray = [
//     {
//         albumCover: "./misc/albums/brysontiller_truetoself.png",
//         albumName: 'Bryson Tiller - True To Self',
//         albumPrice: 27.99
//     },
//     {
//         albumCover: "./misc/albums/sampha_lahai.png",
//         albumName: 'Sampha - Lahai',
//         albumPrice: 39.99
//     },
//     {
//         albumCover: "./misc/albums/kaliuchis_redmooninvenus.png",
//         albumName: 'Kali Uchis - Red Moon in Venus',
//         albumPrice: 24.99
//     },
//     {
//         albumCover: "./misc/albums/danielcaesar_neverenough.png",
//         albumName: 'Daniel Caesar - Never Enough',
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/zackfox_woodtip.png",
//         albumName: 'Zack Fox - wood tip',
//         albumPrice: 99.99
//     },
//     {
//         albumCover: "./misc/albums/blxst_nolovelostdeluxe.png",
//         albumName: 'Blxst - No Love Lost (Deluxe)',
//         albumPrice: 14.99
//     },
//     {
//         albumCover: "./misc/albums/6lack_free6lack.png",
//         albumName: '6LACK - Free 6LACK',
//         albumPrice: 49.99
//     },
//     {
//         albumCover: "./misc/albums/arilennox_sheabutterbaby.png",
//         albumName: 'Ari Lennox - Shea Butter Baby',
//         albumPrice: 39.99
//     },
//     {
//         albumCover: "./misc/albums/joji_smithereens.png",
//         albumName: 'Joji - SMITHEREENS',
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/stevelacy_stevelacysdemo.png",
//         albumName: `Steve Lacy - Steve Lacy's Demo`,
//         albumPrice: 17.99
//     },
//     {
//         albumCover: "./misc/albums/sza_ctrl.png",
//         albumName: 'SZA - Ctrl',
//         albumPrice: 39.99
//     },
//     {
//         albumCover: "./misc/albums/kehlani_whilewewait.png",
//         albumName: 'Kehlani - While We Wait',
//         albumPrice: 44.99
//     },
//     {
//         albumCover: "./misc/albums/kelela_raven.png",
//         albumName: 'Kelela - Raven',
//         albumPrice: 29.99
//     },
//     {
//         albumCover: "./misc/albums/kaytranada_999percent.png",
//         albumName: 'KAYTRANADA - 99.9%',
//         albumPrice: 49.99
//     },
//     {
//         albumCover: "./misc/albums/jazminesullivan_heauxtales.png",
//         albumName: 'Jazmine Sullivan - Heaux Tales',
//         albumPrice: 24.99
//     }
// ];

// const popArray = [
//     {
//         albumCover: "./misc/albums/beyonce_lemonade.png",
//         albumName: 'Beyonce - Lemonade',
//         albumPrice: 34.99
//     },
//     {
//         albumCover: "./misc/albums/carlyraejepsen_emotionsideb.png",
//         albumName: 'Carly Rae Jepsen - E-MO-TION: Side B',
//         albumPrice: 35.99
//     },
//     {
//         albumCover: "./misc/albums/rinasawayama_holdthegirl.png",
//         albumName: 'Rina Sawayama - Hold The Girl',
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/kerokerobonito_bonitogeneration.png",
//         albumName: 'Kero Kero Bonito - Bonito Generation',
//         albumPrice: 49.99
//     },
//     {
//         albumCover: "./misc/albums/yeule_softscars.png",
//         albumName: 'Yeule - Softscars',
//         albumPrice: 28.99
//     },
//     {
//         albumCover: "./misc/albums/markronson_uptownspecial.png",
//         albumName: 'Mark Ronson - Uptown Special',
//         albumPrice: 24.99
//     },
//     {
//         albumCover: "./misc/albums/taylorswift_1989.png",
//         albumName: 'Taylor Swift - 1989',
//         albumPrice: 44.99
//     },
//     {
//         albumCover: "./misc/albums/fkatwigs_m3ll155x.png",
//         albumName: 'FKA twigs - M3LL155X',
//         albumPrice: 23.99
//     },
//     {
//         albumCover: "./misc/albums/jessieware_whatsyourpleasure.png",
//         albumName: `Jessie Ware - What's Your Pleasure?`,
//         albumPrice: 39.99
//     },
//     {
//         albumCover: "./misc/albums/kilokish_redux.png",
//         albumName: `Kilo Kish - REDUX`,
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/dualipa_futurenostalgiathemoonlightedition.png",
//         albumName: 'Dua Lipa - Future Nostalgia (The Moonlight Edition)',
//         albumPrice: 55.99
//     },
//     {
//         albumCover: "./misc/albums/billieeilish_dontsmileatme.png",
//         albumName: `Billie Eilish - Don't Smile At Me`,
//         albumPrice: 21.99
//     },
//     {
//         albumCover: "./misc/albums/carolinepolachek_desireiwanttoturnintoyou.png",
//         albumName: 'Caroline Polachek - Desire, I Want To Turn Into You',
//         albumPrice: 29.99
//     },
//     {
//         albumCover: "./misc/albums/24kgoldn_eldorado.png",
//         albumName: '24kGoldn - El Dorado',
//         albumPrice: 14.99
//     },
//     {
//         albumCover: "./misc/albums/arianagrande_positions.png",
//         albumName: 'Ariana Grande - Positions',
//         albumPrice: 31.99
//     }
// ];

// const soulArray = [
//     {
//         albumCover: "./misc/albums/silksonicandersonpaakbrunomars_aneveningwithsilksonic.png",
//         albumName: 'Silk Sonic - An Evening With Silk Sonic',
//         albumPrice: 74.99
//     },
//     {
//         albumCover: "./misc/albums/foushee_timemachine.png",
//         albumName: 'Foushee - Time Machine',
//         albumPrice: 22.99
//     },
//     {
//         albumCover: "./misc/albums/andre3000_thebluesun.png",
//         albumName: 'Andre 3000 - The Blue Sun',
//         albumPrice: 32.99
//     },
//     {
//         albumCover: "./misc/albums/smino_blkswn.png",
//         albumName: 'Smino - blkswn',
//         albumPrice: 36.99
//     },
//     {
//         albumCover: "./misc/albums/liannelahavas_liannelahavas.png",
//         albumName: 'Lianne La Havas - Lianne La Havas',
//         albumPrice: 44.99
//     },
//     {
//         albumCover: "./misc/albums/tylerthecreator_igor.png",
//         albumName: 'Tyler, The Creator - IGOR',
//         albumPrice: 59.99
//     },
//     {
//         albumCover: "./misc/albums/frankocean_blonde.png",
//         albumName: 'Frank Ocean - Blonde',
//         albumPrice: 29.99
//     },
//     {
//         albumCover: "./misc/albums/sampathegreat_asabovesobelow.png",
//         albumName: 'Sampa The Great - As Above, So Below',
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/andersonpaak_venice.png",
//         albumName: `Anderson .Paak - Venice`,
//         albumPrice: 42.99
//     },
//     {
//         albumCover: "./misc/albums/thundercat_itiswhatitis.png",
//         albumName: `Thundercat - It Is What It Is`,
//         albumPrice: 39.99
//     },
//     {
//         albumCover: "./misc/albums/kaliuchis_porvida.png",
//         albumName: 'Kali Uchis - Por Vida',
//         albumPrice: 24.99
//     },
//     {
//         albumCover: "./misc/albums/childishgambino_awakenmylove.png",
//         albumName: `Childish Gambino - Awaken, My Love`,
//         albumPrice: 29.99
//     },
//     {
//         albumCover: "./misc/albums/nxworriesandersonpaakknxwledge_yeslawd.png",
//         albumName: 'NxWorries - Yes Lawd!',
//         albumPrice: 99.99
//     },
//     {
//         albumCover: "./misc/albums/dram_bigbabydramdeluxe.png",
//         albumName: 'DRAM - Big Baby DRAM (Deluxe)',
//         albumPrice: 30.99
//     },
//     {
//         albumCover: "./misc/albums/arilennox_awaymessage.png",
//         albumName: 'Ari Lennox - Away Message',
//         albumPrice: 15.99
//     }
// ];

// const instrumentalArray = [
//     {
//         albumCover: "./misc/albums/soichiterada_asakusalight.png",
//         albumName: 'Soichi Terada - Asakusa Light',
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/clamscasino_rainforest.png",
//         albumName: 'Clams Casino - Rainforest',
//         albumPrice: 14.99
//     },
//     {
//         albumCover: "./misc/albums/flume_hithisisflume.png",
//         albumName: 'Flume - Hi This Is Flume',
//         albumPrice: 27.99
//     },
//     {
//         albumCover: "./misc/albums/djkoze_knockknock.png",
//         albumName: 'DJ Koze - Knock Knock',
//         albumPrice: 36.99
//     },
//     {
//         albumCover: "./misc/albums/knxwledge_1988.png",
//         albumName: 'Knxwledge - 1988',
//         albumPrice: 45.99
//     },
//     {
//         albumCover: "./misc/albums/larryfisherman_runonsentencesvol2.png",
//         albumName: 'Larry Fisherman - Run On Sentences Vol. 2',
//         albumPrice: 14.99
//     },
//     {
//         albumCover: "./misc/albums/kennybeats_louie.png",
//         albumName: 'Kenny Beats - Louie',
//         albumPrice: 24.99
//     },
//     {
//         albumCover: "./misc/albums/kaytranadarobertglasper_theartscienceremixes.png",
//         albumName: 'KAYTRANADA & Robert Glasper - The Art Science Remixes',
//         albumPrice: 16.99
//     },
//     {
//         albumCover: "./misc/albums/jdilla_donuts.png",
//         albumName: `J Dilla - Donuts`,
//         albumPrice: 89.99
//     },
//     {
//         albumCover: "./misc/albums/theloniousmartin_season1episode1.png",
//         albumName: `Thelonious Martin - Season 1: Episode 1`,
//         albumPrice: 12.99
//     },
//     {
//         albumCover: "./misc/albums/disclosure_energy.png",
//         albumName: 'Disclosure - Energy',
//         albumPrice: 34.99
//     },
//     {
//         albumCover: "./misc/albums/againstalllogic_20122017.png",
//         albumName: `Against All Logic - 2012-2017`,
//         albumPrice: 22.99
//     },
//     {
//         albumCover: "./misc/albums/thealchemist_carrythefire.png",
//         albumName: 'The Alchemist - Carry The Fire',
//         albumPrice: 19.99
//     },
//     {
//         albumCover: "./misc/albums/sledgren_enigma.png",
//         albumName: 'Sledgren - Enigma',
//         albumPrice: 26.99
//     },
//     {
//         albumCover: "./misc/albums/cookinsoul_whatevavol2.png",
//         albumName: 'Cookin Soul - Whateva Vol. 2',
//         albumPrice: 20.99
//     }
// ];

// const bestSellerArray = [
//     {
//         "albumCover": "./misc/albums/vincestaples_bigfishtheory.png",
//         "albumName": "Vince Staples - Big Fish Theory",
//         "albumPrice": 39.99
//     },
//     {
//         "albumCover": "./misc/albums/andersonpaak_malibu.png",
//         "albumName": "Anderson .Paak - Malibu",
//         "albumPrice": 35.99
//     },
//     {
//         "albumCover": "./misc/albums/macmiller_faces.png",
//         "albumName": "Mac Miller - Faces",
//         "albumPrice": 49.99
//     },
//     {
//         "albumCover": "./misc/albums/larryjune_mrmidnight.png",
//         "albumName": "Larry June - Mr. Midnight",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/boldyjamesthealchemist_thepriceofteainchina.png",
//         "albumName": "Boldy James & The Alchemist - The Price of Tea in China",
//         "albumPrice": 41.99
//     },
//     {
//         "albumCover": "./misc/albums/currensy_pilottalk.png",
//         "albumName": "Curren$y - Pilot Talk",
//         "albumPrice": 26.99
//     },
//     {
//         "albumCover": "./misc/albums/westsidegunnthepurist_rosesareredsoisblood.png",
//         "albumName": "Westside Gunn & The Purist - Roses Are Red...So is Blood",
//         "albumPrice": 23.99
//     },
//     {
//         "albumCover": "./misc/albums/freddiegibbs_freddie.png",
//         "albumName": "Freddie Gibbs - Freddie",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/denzelcurry_zuu.png",
//         "albumName": "Denzel Curry - ZUU",
//         "albumPrice": 29.99
//     }
// ];

// const hiphopArray = [
//     {
//         "albumCover": "./misc/albums/machhommy_thegat.png",
//         "albumName": "Mach-Hommy - The G.A.T...",
//         "albumPrice": 2999.99
//     },
//     {
//         "albumCover": "./misc/albums/kevingates_lucabrasi3.png",
//         "albumName": "Kevin Gates - Luca Brasi 3",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/bennythebutcher_burdenofproof.png",
//         "albumName": "Benny The Butcher - Burden Of Proof",
//         "albumPrice": 29.99
//     },
//     {
//         "albumCover": "./misc/albums/maxokream_brandonbanks.png",
//         "albumName": "Maxo Kream - Brandon Banks",
//         "albumPrice": 39.99
//     },
//     {
//         "albumCover": "./misc/albums/keyglock_yellowtape.png",
//         "albumName": "Key Glock - Yellow Tape",
//         "albumPrice": 24.99
//     },
//     {
//         "albumCover": "./misc/albums/amine_limbo.png",
//         "albumName": "Amine - Limbo",
//         "albumPrice": 30.99
//     },
//     {
//         "albumCover": "./misc/albums/jid_theforeverstory.png",
//         "albumName": "J.I.D - The Forever Story",
//         "albumPrice": 44.99
//     },
//     {
//         "albumCover": "./misc/albums/conwaythemachine_fromkingtoagod.png",
//         "albumName": "Conway The Machine - From King To A God",
//         "albumPrice": 35.99
//     },
//     {
//         "albumCover": "./misc/albums/keykennybeats_777.png",
//         "albumName": "KEY! & Kenny Beats - 777",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/riconasty_nasty.png",
//         "albumName": "Rico Nasty - Nasty",
//         "albumPrice": 29.99
//     },
//     {
//         "albumCover": "./misc/albums/cousinstizz_tryingtofindmynextthrill.png",
//         "albumName": "Cousin Stizz - Trying To Find My Next Thrill",
//         "albumPrice": 22.99
//     },
//     {
//         "albumCover": "./misc/albums/nipseyhussle_victorylap.png",
//         "albumName": "Nipsey Hussle - Victory Lap",
//         "albumPrice": 99.99
//     },
//     {
//         "albumCover": "./misc/albums/schoolboyq_crashtalk.png",
//         "albumName": "ScHoolboy Q - CrasH Talk",
//         "albumPrice": 52.99
//     },
//     {
//         "albumCover": "./misc/albums/babytron_lukatroncic.png",
//         "albumName": "BabyTron - Luka Troncic",
//         "albumPrice": 18.99
//     },
//     {
//         "albumCover": "./misc/albums/joeybadass_allamerikkkanbadass.png",
//         "albumName": "Joey Bada$$ - ALL-AMERIKKKAN BADA$$",
//         "albumPrice": 37.99
//     }
// ];

// const rnbArray = [
//     {
//         "albumCover": "./misc/albums/brysontiller_truetoself.png",
//         "albumName": "Bryson Tiller - True To Self",
//         "albumPrice": 27.99
//     },
//     {
//         "albumCover": "./misc/albums/sampha_lahai.png",
//         "albumName": "Sampha - Lahai",
//         "albumPrice": 39.99
//     },
//     {
//         "albumCover": "./misc/albums/kaliuchis_redmooninvenus.png",
//         "albumName": "Kali Uchis - Red Moon in Venus",
//         "albumPrice": 24.99
//     },
//     {
//         "albumCover": "./misc/albums/danielcaesar_neverenough.png",
//         "albumName": "Daniel Caesar - Never Enough",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/zackfox_woodtip.png",
//         "albumName": "Zack Fox - wood tip",
//         "albumPrice": 99.99
//     },
//     {
//         "albumCover": "./misc/albums/blxst_nolovelostdeluxe.png",
//         "albumName": "Blxst - No Love Lost (Deluxe)",
//         "albumPrice": 14.99
//     },
//     {
//         "albumCover": "./misc/albums/6lack_free6lack.png",
//         "albumName": "6LACK - Free 6LACK",
//         "albumPrice": 49.99
//     },
//     {
//         "albumCover": "./misc/albums/arilennox_sheabutterbaby.png",
//         "albumName": "Ari Lennox - Shea Butter Baby",
//         "albumPrice": 39.99
//     },
//     {
//         "albumCover": "./misc/albums/joji_smithereens.png",
//         "albumName": "Joji - SMITHEREENS",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/stevelacy_stevelacysdemo.png",
//         "albumName": "Steve Lacy - Steve Lacy's Demo",
//         "albumPrice": 17.99
//     },
//     {
//         "albumCover": "./misc/albums/sza_ctrl.png",
//         "albumName": "SZA - Ctrl",
//         "albumPrice": 39.99
//     },
//     {
//         "albumCover": "./misc/albums/kehlani_whilewewait.png",
//         "albumName": "Kehlani - While We Wait",
//         "albumPrice": 44.99
//     },
//     {
//         "albumCover": "./misc/albums/kelela_raven.png",
//         "albumName": "Kelela - Raven",
//         "albumPrice": 29.99
//     },
//     {
//         "albumCover": "./misc/albums/kaytranada_999percent.png",
//         "albumName": "KAYTRANADA - 99.9%",
//         "albumPrice": 49.99
//     },
//     {
//         "albumCover": "./misc/albums/jazminesullivan_heauxtales.png",
//         "albumName": "Jazmine Sullivan - Heaux Tales",
//         "albumPrice": 24.99
//     }
// ];

// const popArray = [
//     {
//         "albumCover": "./misc/albums/beyonce_lemonade.png",
//         "albumName": "Beyonce - Lemonade",
//         "albumPrice": 34.99
//     },
//     {
//         "albumCover": "./misc/albums/carlyraejepsen_emotionsideb.png",
//         "albumName": "Carly Rae Jepsen - E-MO-TION: Side B",
//         "albumPrice": 35.99
//     },
//     {
//         "albumCover": "./misc/albums/rinasawayama_holdthegirl.png",
//         "albumName": "Rina Sawayama - Hold The Girl",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/kerokerobonito_bonitogeneration.png",
//         "albumName": "Kero Kero Bonito - Bonito Generation",
//         "albumPrice": 49.99
//     },
//     {
//         "albumCover": "./misc/albums/yeule_softscars.png",
//         "albumName": "Yeule - Softscars",
//         "albumPrice": 28.99
//     },
//     {
//         "albumCover": "./misc/albums/markronson_uptownspecial.png",
//         "albumName": "Mark Ronson - Uptown Special",
//         "albumPrice": 24.99
//     },
//     {
//         "albumCover": "./misc/albums/taylorswift_1989.png",
//         "albumName": "Taylor Swift - 1989",
//         "albumPrice": 44.99
//     },
//     {
//         "albumCover": "./misc/albums/fkatwigs_m3ll155x.png",
//         "albumName": "FKA twigs - M3LL155X",
//         "albumPrice": 23.99
//     },
//     {
//         "albumCover": "./misc/albums/jessieware_whatsyourpleasure.png",
//         "albumName": "Jessie Ware - What's Your Pleasure?",
//         "albumPrice": 39.99
//     },
//     {
//         "albumCover": "./misc/albums/kilokish_redux.png",
//         "albumName": "Kilo Kish - REDUX",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/dualipa_futurenostalgiathemoonlightedition.png",
//         "albumName": "Dua Lipa - Future Nostalgia (The Moonlight Edition)",
//         "albumPrice": 55.99
//     },
//     {
//         "albumCover": "./misc/albums/billieeilish_dontsmileatme.png",
//         "albumName": "Billie Eilish - Don't Smile At Me",
//         "albumPrice": 21.99
//     },
//     {
//         "albumCover": "./misc/albums/carolinepolachek_desireiwanttoturnintoyou.png",
//         "albumName": "Caroline Polachek - Desire, I Want To Turn Into You",
//         "albumPrice": 29.99
//     },
//     {
//         "albumCover": "./misc/albums/24kgoldn_eldorado.png",
//         "albumName": "24kGoldn - El Dorado",
//         "albumPrice": 14.99
//     },
//     {
//         "albumCover": "./misc/albums/arianagrande_positions.png",
//         "albumName": "Ariana Grande - Positions",
//         "albumPrice": 31.99
//     }
// ];

// const soulArray = [
//     {
//         "albumCover": "./misc/albums/silksonicandersonpaakbrunomars_aneveningwithsilksonic.png",
//         "albumName": "Silk Sonic - An Evening With Silk Sonic",
//         "albumPrice": 74.99
//     },
//     {
//         "albumCover": "./misc/albums/foushee_timemachine.png",
//         "albumName": "Foushee - Time Machine",
//         "albumPrice": 22.99
//     },
//     {
//         "albumCover": "./misc/albums/andre3000_thebluesun.png",
//         "albumName": "Andre 3000 - The Blue Sun",
//         "albumPrice": 32.99
//     },
//     {
//         "albumCover": "./misc/albums/smino_blkswn.png",
//         "albumName": "Smino - blkswn",
//         "albumPrice": 36.99
//     },
//     {
//         "albumCover": "./misc/albums/liannelahavas_liannelahavas.png",
//         "albumName": "Lianne La Havas - Lianne La Havas",
//         "albumPrice": 44.99
//     },
//     {
//         "albumCover": "./misc/albums/tylerthecreator_igor.png",
//         "albumName": "Tyler, The Creator - IGOR",
//         "albumPrice": 59.99
//     },
//     {
//         "albumCover": "./misc/albums/frankocean_blonde.png",
//         "albumName": "Frank Ocean - Blonde",
//         "albumPrice": 29.99
//     },
//     {
//         "albumCover": "./misc/albums/sampathegreat_asabovesobelow.png",
//         "albumName": "Sampa The Great - As Above, So Below",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/andersonpaak_venice.png",
//         "albumName": "Anderson .Paak - Venice",
//         "albumPrice": 42.99
//     },
//     {
//         "albumCover": "./misc/albums/thundercat_itiswhatitis.png",
//         "albumName": "Thundercat - It Is What It Is",
//         "albumPrice": 39.99
//     },
//     {
//         "albumCover": "./misc/albums/kaliuchis_porvida.png",
//         "albumName": "Kali Uchis - Por Vida",
//         "albumPrice": 24.99
//     },
//     {
//         "albumCover": "./misc/albums/childishgambino_awakenmylove.png",
//         "albumName": "Childish Gambino - Awaken, My Love",
//         "albumPrice": 29.99
//     },
//     {
//         "albumCover": "./misc/albums/nxworriesandersonpaakknxwledge_yeslawd.png",
//         "albumName": "NxWorries - Yes Lawd!",
//         "albumPrice": 99.99
//     },
//     {
//         "albumCover": "./misc/albums/dram_bigbabydramdeluxe.png",
//         "albumName": "DRAM - Big Baby DRAM (Deluxe)",
//         "albumPrice": 30.99
//     },
//     {
//         "albumCover": "./misc/albums/arilennox_awaymessage.png",
//         "albumName": "Ari Lennox - Away Message",
//         "albumPrice": 15.99
//     }
// ];

// const instrumentalArray = [
//     {
//         "albumCover": "./misc/albums/soichiterada_asakusalight.png",
//         "albumName": "Soichi Terada - Asakusa Light",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/clamscasino_rainforest.png",
//         "albumName": "Clams Casino - Rainforest",
//         "albumPrice": 14.99
//     },
//     {
//         "albumCover": "./misc/albums/flume_hithisisflume.png",
//         "albumName": "Flume - Hi This Is Flume",
//         "albumPrice": 27.99
//     },
//     {
//         "albumCover": "./misc/albums/djkoze_knockknock.png",
//         "albumName": "DJ Koze - Knock Knock",
//         "albumPrice": 36.99
//     },
//     {
//         "albumCover": "./misc/albums/knxwledge_1988.png",
//         "albumName": "Knxwledge - 1988",
//         "albumPrice": 45.99
//     },
//     {
//         "albumCover": "./misc/albums/larryfisherman_runonsentencesvol2.png",
//         "albumName": "Larry Fisherman - Run On Sentences Vol. 2",
//         "albumPrice": 14.99
//     },
//     {
//         "albumCover": "./misc/albums/kennybeats_louie.png",
//         "albumName": "Kenny Beats - Louie",
//         "albumPrice": 24.99
//     },
//     {
//         "albumCover": "./misc/albums/kaytranadarobertglasper_theartscienceremixes.png",
//         "albumName": "KAYTRANADA & Robert Glasper - The Art Science Remixes",
//         "albumPrice": 16.99
//     },
//     {
//         "albumCover": "./misc/albums/jdilla_donuts.png",
//         "albumName": "J Dilla - Donuts",
//         "albumPrice": 89.99
//     },
//     {
//         "albumCover": "./misc/albums/theloniousmartin_season1episode1.png",
//         "albumName": "Thelonious Martin - Season 1: Episode 1",
//         "albumPrice": 12.99
//     },
//     {
//         "albumCover": "./misc/albums/disclosure_energy.png",
//         "albumName": "Disclosure - Energy",
//         "albumPrice": 34.99
//     },
//     {
//         "albumCover": "./misc/albums/againstalllogic_20122017.png",
//         "albumName": "Against All Logic - 2012-2017",
//         "albumPrice": 22.99
//     },
//     {
//         "albumCover": "./misc/albums/thealchemist_carrythefire.png",
//         "albumName": "The Alchemist - Carry The Fire",
//         "albumPrice": 19.99
//     },
//     {
//         "albumCover": "./misc/albums/sledgren_enigma.png",
//         "albumName": "Sledgren - Enigma",
//         "albumPrice": 26.99
//     },
//     {
//         "albumCover": "./misc/albums/cookinsoul_whatevavol2.png",
//         "albumName": "Cookin Soul - Whateva Vol. 2",
//         "albumPrice": 20.99
//     }
// ];

export default function MainShell({mainShellData}) {
    const [items, setItems] = React.useState([]);
    const [contentIsLoading, setContentIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            axios.get('https://6564f1c3ceac41c0761f0d10.mockapi.io/items').then((response) => {
                console.log(response.data);
                setItems(response.data);
                setContentIsLoading(false);
            });
        }, 1);
    }, []);

    if (contentIsLoading) {
        return(
            <div className="main-shell">
                <NavigationBar />

                <h1>Загрузка</h1>
            </div>
        );
    }

    // React.useEffect(() => {
    //     fetch('https://6564f1c3ceac41c0761f0d10.mockapi.io/items').then((res) => {
    //         return res.json();
    //     }).then((json) => {
    //         setItems(json);
    //     })
    // }, []);

    return(
        <div className="main-shell">
            <NavigationBar />

            <h1 id="best-sellers">Популярные альбомы</h1>
            <div className="content">
                {items[0].map( (item) => (
                    <Card 
                    albumCover={item.albumCover} 
                    albumName={item.albumName} 
                    albumPrice={item.albumPrice}  
                    onClickFavorite={() => console.log("AddedToFavorite")}
                    onClickPlus={() => mainShellData(item)} />
                ))}
                <BtnMore />
            </div>

            <h1 id="hip-hop-records">Хип-Хоп альбомы</h1>
            <div className="content">
                {items[1].map( (item) => (
                    <Card 
                    albumCover={item.albumCover} 
                    albumName={item.albumName} 
                    albumPrice={item.albumPrice}  
                    onClickFavorite={() => console.log("AddedToFavorite")}
                    onClickPlus={() => mainShellData(item)} />
                ))}
                <BtnMore />
            </div>

            <h1 id="rnb-records">RnB альбомы</h1>
            <div className="content">
                {items[2].map( (item) => (
                    <Card 
                    albumCover={item.albumCover} 
                    albumName={item.albumName} 
                    albumPrice={item.albumPrice}  
                    onClickFavorite={() => console.log("AddedToFavorite")}
                    onClickPlus={() => mainShellData(item)} />
                ))}
                <BtnMore />
            </div>

            <h1 id="pop-records">Поп альбомы</h1>
            <div className="content">
                {items[3].map( (item) => (
                    <Card 
                    albumCover={item.albumCover} 
                    albumName={item.albumName} 
                    albumPrice={item.albumPrice}  
                    onClickFavorite={() => console.log("AddedToFavorite")}
                    onClickPlus={() => mainShellData(item)} />
                ))}
                <BtnMore />
            </div>

            <h1 id="soul-records">Соул альбомы</h1>
            <div className="content">
                {items[4].map( (item) => (
                    <Card 
                    albumCover={item.albumCover} 
                    albumName={item.albumName} 
                    albumPrice={item.albumPrice}  
                    onClickFavorite={() => console.log("AddedToFavorite")}
                    onClickPlus={() => mainShellData(item)} />
                ))}
                <BtnMore />
            </div>

            <h1 id="instrumental-records">Инструментальные альбомы</h1>
            <div className="content">
                {items[5].map( (item) => (
                    <Card 
                    albumCover={item.albumCover} 
                    albumName={item.albumName} 
                    albumPrice={item.albumPrice} 
                    onClickFavorite={() => console.log("AddedToFavorite")}
                    onClickPlus={() => mainShellData(item)} />
                ))}
                <BtnMore />
            </div>

        </div>
    );
}