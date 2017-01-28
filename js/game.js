$(document).ready(function() {
	
	var inmenu = true;
	var fight_screen = false;
	var text = "* You feel like you' re going to have a bad time."
	var speak_bubble;
	var count = 0;
	var selector_pos = 1;
	var menu_deep_pos = 0;
	var heart_pos = 1;
	var dial_width = 565;
	var move_allow = false;
	var fight_jauge_pos = 0;
	var fight_jauge_stop = false;
	var infight = true;
	var item_fin = false;
	var fightOK = true;
	var bubble_ON = false;
	var heart_cur_posx = 46;
	var heart_cur_posy = 45;
	var bone_pos = -40;
	var heart_hurt = false;
	var musique = true;
	var HP = 92;
	
	var audioBip = document.createElement('audio');
	audioBip.setAttribute('src', 'sounds/bipsound.ogg');
	
	var audioBipConf = document.createElement('audio');
	audioBipConf.setAttribute('src', 'sounds/bip.ogg');
	
	var audioItem = document.createElement('audio');
	audioItem.setAttribute('src', 'sounds/healing.ogg');
	
	var audioSlice = document.createElement('audio');
	audioSlice.setAttribute('src', 'sounds/slice.ogg');
	
	var audioHurt = document.createElement('audio');
	audioHurt.setAttribute('src', 'sounds/hurt.ogg');
	
	var audioDog = document.createElement('audio');
	audioDog.setAttribute('src', 'sounds/dog.ogg');
	
	var audioSans = document.createElement('audio');
	audioSans.setAttribute('src', 'sounds/sans_speak.ogg');
	audioSans.setAttribute('loop', 'loop');
	
	var audioTypeWriter = document.createElement('audio');
	audioTypeWriter.setAttribute('src', 'sounds/typewriter.ogg');
	audioTypeWriter.setAttribute('loop', 'loop');
	
	var audioMusique = document.createElement('audio');
	audioMusique.setAttribute('src', 'sounds/megalovania.ogg');
	audioMusique.setAttribute('loop', 'loop');
	audioMusique.play();
	
	var KeyDown_UP = false;
	var KeyDown_DOWN = false;
	var KeyDown_LEFT = false;
	var KeyDown_RIGHT = false;
	var KeysDown = true;
	
	
	$(document).on('keyup', function(e) {
		
		if(KeyDown_UP && e.keyCode == 38) { 
			KeyDown_UP = false;
			console.log("HAUT lachée");
		}
		if(KeyDown_DOWN && e.keyCode == 40) { 
			KeyDown_DOWN = false;
			console.log("BAS lachée");
		}
		if(KeyDown_LEFT && e.keyCode == 37) { 
			KeyDown_LEFT = false;
			console.log("GAUCHE lachée");
		}
		if(KeyDown_RIGHT && e.keyCode == 39) { 
			KeyDown_RIGHT = false;
			console.log("DROITE lachée");
		}
		
		KeysDown = !KeyDown_UP && !KeyDown_DOWN && !KeyDown_LEFT && !KeyDown_RIGHT;
	
	});
	
	$(document).on('keydown', function(e) {
		
		if(!KeyDown_UP && e.keyCode == 38) {
			console.log("HAUT pressée");
			KeyDown_UP = true;
		}
		if(!KeyDown_DOWN && e.keyCode == 40) {
			console.log("BAS pressée");
			KeyDown_DOWN = true;
		}
		if(!KeyDown_LEFT && e.keyCode == 37) {
			console.log("GAUCHE pressée");
			KeyDown_LEFT = true;
		}
		if(!KeyDown_RIGHT && e.keyCode == 39) {
			console.log("DROITE pressée");
			KeyDown_RIGHT = true;
		}
		
		if(KeysDown && move_allow)
			console.log("heartMove lancée!");
			KeysDown = false;
			heartMove();
	
	});
	
	function heartMove() {
				
				var redo = false;
				
				if(move_allow) {
					heart_cur_posy = parseFloat(document.getElementById('heart_cur').style.top.replace('px', ''));
					heart_cur_posx = parseFloat(document.getElementById('heart_cur').style.left.replace('px', ''));
				}
				
				if(KeyDown_UP && heart_cur_posy > -11) {
					if(KeyDown_DOWN || KeyDown_LEFT || KeyDown_RIGHT)
						heart_cur_posy-=2;
					else
						heart_cur_posy-=2.82;
					if(move_allow) {
						document.getElementById('heart_cur').style.top = heart_cur_posy+'px';
						document.getElementById('heart_cur').style.left = heart_cur_posx+'px';
					}
				}
				if(KeyDown_DOWN && heart_cur_posy < 101) {
					if(KeyDown_UP || KeyDown_LEFT || KeyDown_RIGHT)
						heart_cur_posy+=2;
					else
						heart_cur_posy+=2.82;
					if(move_allow) {
						document.getElementById('heart_cur').style.top = heart_cur_posy+'px';
						document.getElementById('heart_cur').style.left = heart_cur_posx+'px';
					}
				}
				if(KeyDown_LEFT && heart_cur_posx > -12) {
					if(KeyDown_DOWN || KeyDown_UP || KeyDown_RIGHT)
						heart_cur_posx-=2;
					else
						heart_cur_posx-=2.82;
					if(move_allow) {
						document.getElementById('heart_cur').style.top = heart_cur_posy+'px';
						document.getElementById('heart_cur').style.left = heart_cur_posx+'px';
					}
				}
				if(KeyDown_RIGHT && heart_cur_posx < 105) {
					if(KeyDown_DOWN || KeyDown_LEFT || KeyDown_UP)
						heart_cur_posx+=2;
					else
						heart_cur_posx+=2.82;
					if(move_allow) {
						document.getElementById('heart_cur').style.top = heart_cur_posy+'px';
						document.getElementById('heart_cur').style.left = heart_cur_posx+'px';
					}
				}
				
				redo = KeyDown_UP || KeyDown_DOWN || KeyDown_LEFT || KeyDown_RIGHT;
				if(redo && move_allow) {
					setTimeout(heartMove, 25);
				}
				
	}
	
	function setHP(HP) {
		$('#hp_numb').empty();
		$('#hp_numb').append(HP);
		document.getElementById("HP_left").style.width = 'calc(' + HP + ' * 110px / 92)';
	}
	
	function reduce() {
		if(dial_width == 133){
			$('#text_box').append("<img id='heart_cur' src='img/fav_red.png' style='position: absolute; top: 45px; left: 46px'/>");
			return;
		}
		setTimeout(reduce, 4);
		dial_width = dial_width-3;
		document.getElementById("dialogue_box").style.width = dial_width+'px';
	}
	
	function extand() {
		if(dial_width == 565){
			text = "* You felt your sins crawling on your back."
			return;
		}
		move_allow = false;
		setTimeout(extand, 4);
		audioSans.pause();
		dial_width = dial_width+4;
		document.getElementById("dialogue_box").style.width = dial_width+'px';
	}
	
	function type() {
		if(count==text.length) {	
			audioTypeWriter.pause();
			$('#text_box').append("</span>");
			return;
		}
		setTimeout(type, 40);
		if(count<text.length) {
			$('#text_box').append(text.substring(count, count+1));
			count++;
		}
	}
	
	function typeit(texte) {
		text = texte;
		$('#text_box').append("<span>");
		document.getElementById('text_box').style.padding = "15px 15px 0 45px";
		type();
		audioTypeWriter.play();
		return;
	}
	
	function speak() {
		if(count==speak_bubble.length) {	
			audioSans.pause();
			return;
		}
		setTimeout(speak, 25);
		if(count<speak_bubble.length) {
			$('#bubble').append(speak_bubble.substring(count, count+1));
			count++;
		}
	}
					
	function sans_speaking() {
		$('#miss_container').append("<div id='bubble'></div>");
		bubble_ON = true;
		count = 0;
		speak();
		audioSans.play();
		return;
	}
	
	function fight() {
		$('#text_box').empty();
		document.getElementById('dialogue_box').style.background = "url('img/fight.png')";
		$('#text_box').append("<div id='fight_jauge'></div>");
		fight_jauge_pos = 0;
		fight_jauge_stop = false;
		infight = true;
		fight_jauge_move();
		return;
	}
	
	function fight_jauge_move() {
		$(document).on('keydown', function(e) {
			
			if(infight && fightOK && (e.keyCode == 13 || e.keyCode == String.fromCharCode(e.which) == 'z' || String.fromCharCode(e.which) == 'Z')) {
				fight_jauge_stop = true;
				infight = false;
				$(document.getElementById('sans')).addClass('hover');
				$(document.getElementById('fight_jauge')).addClass('clignote');
				$('#miss_container').append("<div id='slice'></div>");
				audioSlice.play();
			}
			
		});
		if(fight_jauge_stop){
			$('#miss_container').append("<div id='miss'></div>");
			fight_jauge_stop = false;
			infight = false;
			return;
		}
		setTimeout(fight_jauge_move, 3);
		fight_jauge_pos+=2;
		document.getElementById("fight_jauge").style.left = fight_jauge_pos+'px';
		if(fight_jauge_pos >=551){
			fight_jauge_stop = true;
		}
	}
	
	function bone_attack() {
		
		if(bone_pos <= -50){
			$('#text_box').empty();
			$('#miss_container').empty();
			menu_deep_pos = 0;
			heart_hurt = false;
			extand();
			count = 0;
			setTimeout(function(){typeit(text)},550);
			for(i=1; i<=4; i++) {
				if(i==selector_pos) $(document.getElementById('selector'+i)).addClass('hover');
				else $(document.getElementById('selector'+i)).removeClass('hover');
			}
			return;
		}
		if(bone_pos < heart_cur_posx+25 && bone_pos > heart_cur_posx-6 && heart_cur_posy > 10 && heart_cur_posy < 90 && !heart_hurt){
			heart_hurt = true;
			audioHurt.play();
			$(document.getElementById('heart_cur')).addClass('clignote');
			(HP - 6 >= 0)?HP = HP - 6:HP = 1;
			setHP(HP);
		}
		setTimeout(bone_attack, 15);
		bone_pos--;
		document.getElementById("bone").style.left = bone_pos+'px';
		return;
	}
	
	typeit(text);
	
	
	$(document).on('keydown', function(e) {
		
		if(infight){
				fightOK = true;
			}
		
		setHP(HP);
		
		if(String.fromCharCode(e.which) == 'm' || String.fromCharCode(e.which) == 'M') {
		if(musique) {
			musique = false;
			audioMusique.pause();
		}
		else {
			musique = true;
			audioMusique.play();
		}
		}
		
		if(inmenu) {
			
			if( bubble_ON && (e.keyCode == 13 || e.keyCode == String.fromCharCode(e.which) == 'z' || String.fromCharCode(e.which) == 'Z')) {
				$('#miss_container').empty();
				audioSans.pause();
				move_allow = true;
				bubble_ON = false;
				$('#text_box').append("<div id='bone'></div>");
				bone_pos = 170;
				bone_attack();
			}
			
			if(item_fin && (e.keyCode == 13 || e.keyCode == String.fromCharCode(e.which) == 'z' || String.fromCharCode(e.which) == 'Z' || e.shiftKey || String.fromCharCode(e.which) == 'x' || String.fromCharCode(e.which) == 'X')) {
				$('#text_box').empty();
				document.getElementById('dialogue_box').style.background = "";
				$(document.getElementById('selector'+selector_pos)).removeClass('sel');
				reduce();
				menu_deep_pos = 2;
				sans_speaking();
				item_fin = false;
				move_allow = false;
			}
			
			if(menu_deep_pos==4 && (e.keyCode == 13 || e.keyCode == String.fromCharCode(e.which) == 'z' || String.fromCharCode(e.which) == 'Z')) {
				
					audioBipConf.play();
					menu_deep_pos = 3;
					$('#text_box').empty();
					count = 0;
					item_fin = false;
					
					if(heart_pos==1) {
						typeit("* SANS 1 ATK 1 DEF"); 
						speak_bubble = "go ahead and try to hit me if you're able...";
						setTimeout(function(){
							$('#text_box').append("<br>");
							count = 0;
							typeit("* The easiest enemy.");
							setTimeout(function(){
								$('#text_box').append("<br>");
								count = 0;
								typeit("* Can only deal 1 damage.");
							},1200);
						},1100);
					}
					if(heart_pos==2) {
						typeit("* You tell Sans a really bad pun about skeletons.");
						speak_bubble = "heheheheheheh... nice one.";
						setTimeout(function(){
							$('#text_box').append("<br>");
							count = 0;
							typeit("* He already knows it.");
						},2500);
					}
					
					setTimeout(function(){
						item_fin = true;
					},3400);
					
			}
			
			if(menu_deep_pos==1 && selector_pos==2 && (e.keyCode == 13 || String.fromCharCode(e.which) == 'z' || String.fromCharCode(e.which) == 'Z')){
				menu_deep_pos=4;
				audioBipConf.play();
			}
			
			if(menu_deep_pos==1 && (e.keyCode == 13 || e.keyCode == String.fromCharCode(e.which) == 'z' || String.fromCharCode(e.which) == 'Z')) {
				menu_deep_pos = 2;
				audioBipConf.play();
				
				
				if(selector_pos==1) {
					menu_deep_pos = 3;
					fight();
					setTimeout(function(){
						$('#text_box').empty();
						$('#miss_container').empty();
						document.getElementById('dialogue_box').style.background = "";
						$(document.getElementById('selector'+selector_pos)).removeClass('sel');
						$(document.getElementById('sans')).removeClass('hover');
						fightOK = false;
						move_allow = false;
						reduce();
						menu_deep_pos = 2;
						speak_bubble = "you, uh, really like swinging that thing around, huh?";
						sans_speaking();
					},2800);
					audioTypeWriter.pause();
				}
				
				if(selector_pos==3) {
					menu_deep_pos = 3;
					$('#text_box').empty();
					count = 0;
					item_fin = false;
					audioItem.play();
					HP = 92;
					setHP(HP);
					
					if(heart_pos==1) {
						typeit("* You ate the Glamburger."); 
						speak_bubble = "this thing has too many glitters on it for me, sorry.";
					}
					if(heart_pos==2) {
						typeit("* You ate the Hot Dog.");
						audioDog.play();
						speak_bubble = "guess you prefer hot-dog in your mouth rather than on your head.";
					}
					if(heart_pos==3) {
						typeit("* You ate the Nice Cream.");
						speak_bubble = "it's the frozen treat that warms your heart!";
					}
					if(heart_pos==4) {
						typeit("* You ate the Butterscotch Pie.");
						speak_bubble = "was that... a cinnamon butterscotch pie? weird...";
					}
					
					setTimeout(function(){
						$('#text_box').append("<br>");
						count = 0;
						typeit("* Your HP was maxed out.");
					},1800);
					setTimeout(function(){
						item_fin = true;
					},3400);
				}
				
			}						
			
			
			
			if(menu_deep_pos==0 && dial_width==565 && (e.keyCode == 13 || String.fromCharCode(e.which) == 'z' || String.fromCharCode(e.which) == 'Z')) {
				audioBipConf.play();
				audioTypeWriter.pause();
				menu_deep_pos = 1;
				heart_pos = 1;
				count = text.length;
				$(document.getElementById('selector'+selector_pos)).removeClass('hover');
				$(document.getElementById('selector'+selector_pos)).addClass('sel');
			}
			
			if(menu_deep_pos==1 && (e.shiftKey || String.fromCharCode(e.which) == 'x' || String.fromCharCode(e.which) == 'X')) {
				audioBip.play();
				menu_deep_pos = 0;
				$(document.getElementById('selector'+selector_pos)).removeClass('sel');
				count = 0;
				$('#text_box').empty();
				typeit(text);
			}
			
			if(menu_deep_pos==4 && (e.shiftKey || String.fromCharCode(e.which) == 'x' || String.fromCharCode(e.which) == 'X')) {
				audioBip.play();
				menu_deep_pos = 1;
				$('#text_box').empty();
			}
			
			if(menu_deep_pos==0){
				
				if(e.keyCode == 39) {
					if(selector_pos==4) selector_pos=1;
					else selector_pos++;
					audioBip.play();
				}
				if(e.keyCode == 37) {
					if(selector_pos==1) selector_pos=4;
					else selector_pos--;
					audioBip.play();
				}
				for(i=1; i<=4; i++) {
					if(i==selector_pos) $(document.getElementById('selector'+i)).addClass('hover');
					else $(document.getElementById('selector'+i)).removeClass('hover');
				}
				
			}
			
			if(menu_deep_pos==1 || menu_deep_pos==4){
				
				document.getElementById('text_box').style.padding = "15px 15px 0 15px";
				
				if(e.keyCode == 38) {
					if(heart_pos==3) heart_pos=1;
					if(heart_pos==4) heart_pos=2;
					audioBip.play();
				}
				if(e.keyCode == 40) {
					if(heart_pos==1) heart_pos=3;
					if(heart_pos==2) heart_pos=4;
					audioBip.play();
				}
				if(e.keyCode == 39) {
					if(heart_pos==1) heart_pos=2;
					if(heart_pos==3) heart_pos=4;
					audioBip.play();
				}
				if(e.keyCode == 37) {
					if(heart_pos==2) heart_pos=1;
					if(heart_pos==4) heart_pos=3;
					audioBip.play();
				}
				
				$('#text_box').empty();
				
				if(menu_deep_pos==1) {
					if(selector_pos==1){
						$('#text_box').append("<div id='heart'/></div><p>* Sans</p><div id='fight_life'></div>");
						heart_pos = 1;
					}
					if(selector_pos==2){
						$('#text_box').append("<div id='heart'/></div><p>* Sans</p>");
						heart_pos = 1;
					}
					if(selector_pos==3){
						$('#text_box').append("<div id='heart'/></div><p>* Glamburger</p><p>* Hot Dog</p><p>* Nice Cream</p><p>* Bscotch Pie</p>");
					}
					if(selector_pos==4){
						$('#text_box').append("<div id='heart'/></div><p>* Spare</p><br><p>* Flee</p>");
						if(heart_pos==2) heart_pos = 1;
						if(heart_pos==4) heart_pos = 3;
					}
				}
				
				if(menu_deep_pos==4) {
					$('#text_box').append("<div id='heart'/></div><p>* Check</p><p>* Joke</p>");
					if(heart_pos==3) heart_pos = 1;
					if(heart_pos==4) heart_pos = 2;
				}
				
				$(document.getElementById('heart')).addClass("heart"+heart_pos);
			}
			
			if(menu_deep_pos==2 && dial_width==565) {
				
				audioTypeWriter.pause();
				$('#text_box').empty();
				reduce();
				move_allow = false;
				$(document.getElementById('selector'+selector_pos)).removeClass('sel');
				if(selector_pos==4) {
					if(heart_pos==1) speak_bubble = "what? do you really wanna get dunked on? heh...";
					else speak_bubble = "you're not goin' anywhere kiddo...";
				}
				sans_speaking();
				
			}
			
			
		}
		
		
	});

});
