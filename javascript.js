var block_canvas = document.getElementById("block_canvas"),
			    ctx     = block_canvas.getContext('2d');
			block_canvas.height = 480;
			block_canvas.width  = 640;
			ctx.fillStyle = '#f26c4f';
			ctx.fillRect(0, 0, 80, 67);
			ctx.strokeStyle = '#f26c4f';	
			ctx.moveTo(80, 20);
			ctx.lineTo(91,32);
			ctx.lineTo(80,44);
			ctx.fill(); // *22