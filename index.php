<!DOCTYPE html>
<html>
	<head>
		<title>UNDERTALE</title>
		<meta charset="utf-8" />
		<meta name="description" content="Fangame of Sans battle from the amazing game Undertale by TobyFox!" />
		<link rel="stylesheet" href="style.css" />
		<link rel="icon" type="image/png" href="img/fav_red.png" />
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/game.js"></script>
	</head>
		
	<body onLoad="self.focus()">
		
		<div id="window">
		
			<div id="heart_fight_start"></div>
			
			<div id="window_game">
				
				<div id="char_box">
					<div id="miss_container" style="background: blue"></div>
					<img id ="sans" src="img/sans.gif" draggable="false" style="margin-left: -8px;"/>
				</div>
				
				<div id="dial_box_zone">
					<div id="dialogue_box" style="width: 565px">
						<div id="text_box">
						</div>
					</div>
				</div>
				
				<div id="player_info">
					<p>Chara</p><p>LV 19</p><span>HP</span><div style="display: inline-block; margin: 0 15px -3px 0; width: 110px; height: 21px; background: red;"><div id="HP_left" style="width: 110px"></div></div><p id="hp_numb" style="margin-right: 7px">92</p><p>/ 92</p>
				</div>
				
				<div id="action_zone">
					<div id="action_buttons">
						<div id="selector1" class="hover"></div>
						<div id="selector2"></div>
						<div id="selector3"></div>
						<div id="selector4"></div>
					</div>
				</div>
				
			</div>
			
			<br>
			<div id="imgs_loader">
			<img src="img/button1.png"/>
			<img src="img/button1h.png"/>
			<img src="img/button1s.png"/>
			<img src="img/button2h.png"/>
			<img src="img/button2s.png"/>
			<img src="img/button3h.png"/>
			<img src="img/button3s.png"/>
			<img src="img/button4h.png"/>
			<img src="img/button4s.png"/>
			<img src="img/fight.png"/>
			<img src="img/miss.png"/>
			<img src="img/bubble.png"/>
			<img src="img/bone.png"/>
			<img src="img/slice1.png"/>
			<img src="img/slice2.png"/>
			<img src="img/slice3.png"/>
			<img src="img/slice4.png"/>
			<img src="img/slice5.png"/>
			<img src="img/slice6.png"/>
			<img src="img/slice7.png"/>
			</div>
			
		</div>
		<br><br>
		
		<span class="disclaimer">
			(c) <a href="http://undertale.com">Undertale</a> belongs to <a href="http://twitter.com/tobyfox">Toby Fox</a>.
		</span>
		<br><br>
		
		<span class="info_keys">
			<div class="key">←</div><div class="key">↑</div><div class="key">↓</div><div class="key">→</div>: MOVING
		</span>
		<span class="info_keys">
			<div class="key">Z</div>or<div class="key">ENTER</div>: CONFIRM 
		</span>
		<span class="info_keys">
			<div class="key">SHIFT</div>: CANCEL
		</span>
		<span class="info_keys" id="music_key">
			<div class="key">M</div>: MUSIC
		</span>
	
	</body>
</html>