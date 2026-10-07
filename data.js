const CASES = [
  {
    "key": "chunkwise_240s_070",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "A subtle and elegant Japanese-style photograph of a woman with soft, contemplative eyes and long flowing dark hair, seated by the window of a speeding train. She sits serenely, hands gently folded in her lap, gazing thoughtfully beyond the glass as the city rushes past. Outside, a vibrant urban landscape blurs into streaks of light and shadow—modern skyscrapers and glimpses of traditional Japanese rooftops merge in a dreamy haze. The window reflects fleeting city lights, creating a layered, poetic composition. Rendered with a soft, muted color palette and vintage film texture, the image captures quiet introspection amid motion. Medium shot, slightly angled, emphasizing her calm expression and the train’s dynamic movement.",
    "title": "By the train window",
    "description": "A quiet moment beside the window of a speeding train.",
    "selection_number": 8
  },
  {
    "key": "chunkwise_240s_000",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "A stylish woman walks confidently down a bustling Tokyo street at night, neon lights and vibrant city signs glowing around her. She wears a sleek black leather jacket, a flowing red dress, and black boots, with a black purse slung over her shoulder. Her sunglasses rest on her nose, bold red lipstick enhancing her cool, composed expression. The wet pavement mirrors the colorful lights, creating dazzling reflections. Pedestrians blur in the background, adding energy to the scene. Dynamic medium shot, slight side angle, smooth motion, cinematic glow.",
    "title": "Neon streets of Tokyo",
    "description": "A woman walks through a neon-lit Tokyo street.",
    "selection_number": 2
  },
  {
    "key": "chunkwise_240s_004",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "Close-up 3D animated scene of a short, fluffy monster with large, wide eyes and an open mouth, kneeling beside a melting red candle, gazing at the flickering flame in awe. The creature's soft, plush-like fur glows under warm, dramatic lighting, emphasizing its innocent and curious expression. Its playful, hunched posture suggests wonder and discovery, as if experiencing fire for the first time. Behind, a cozy, warmly lit room features a crackling fireplace, soft rugs, and wooden furniture blurred in the background. Rich amber, crimson, and golden hues enhance the magical, intimate atmosphere. Gentle flickers of candlelight animate the scene with subtle realism. Smooth Pixar-style rendering, shallow depth of field, eye-level angle.",
    "title": "A tiny monster, a candle",
    "description": "A fluffy little monster watches a flickering candle.",
    "selection_number": 10
  },
  {
    "key": "framewise_240s_014",
    "mode": "framewise",
    "seconds": 240,
    "prompt": "Realistic botanical digital artwork, macro shot of a petri dish containing a thriving miniature bamboo forest with slender green stalks and delicate swaying leaves. Tiny red pandas with reddish-brown fur and black legs play among the bamboo, climbing stalks and nibbling leaves. Nutrient-rich soil fills the dish, blurred forest background with distant mountains and blue sky. Low-angle view emphasizing intricate details, evoking harmony and tranquility in a microscopic natural world.",
    "title": "A miniature bamboo forest",
    "description": "A tiny bamboo forest grows inside a petri dish.",
    "selection_number": 17
  },
  {
    "key": "chunkwise_240s_018",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "Realistic Japanese manga-style digital painting, a young woman with long black hair in a traditional kimono adorned with intricate floral patterns and a neat obi sash sits quietly inside a moving train. She gazes out the window with a contemplative, serene expression, her reflection softly captured on the glass. Outside, the Tokyo suburbs rush by—lush green fields, dense forests, and distant cherry blossoms blend into vivid streaks of emerald, brown, and gold. Faint outlines of skyscrapers peek through the horizon. The dimly lit cabin features warm wooden seats with soft shadows, enhancing the quiet mood. Medium shot, slightly tilted angle, emphasizing the interplay between reflection, motion, and stillness.",
    "title": "A train journey",
    "description": "A woman in a floral kimono sits inside a moving train.",
    "selection_number": 1
  },
  {
    "key": "chunkwise_240s_037",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "Cinematic warm family moment, a grandmother with neatly combed grey hair leans forward, blowing out pink frosted candles on a vibrant birthday cake, wearing a light blue floral blouse, soft joyful expression, sparkling eyes, surrounded by smiling loved ones at a wooden dining table, warm natural lighting, shallow depth of field, 3/4 view, intimate celebratory atmosphere, rich color tones, gentle motion blur on candle smoke.",
    "title": "A birthday wish",
    "description": "A grandmother blows out the candles on her birthday cake.",
    "selection_number": 5
  },
  {
    "key": "chunkwise_240s_063",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "Romantic-style oil painting of a young woman in a flowing floral dress standing joyfully in a lush spring garden, surrounded by blooming roses, tulips, and daisies. Her hair is loosely tied with wildflowers, soft breeze gently swaying petals and strands of hair. Serene expression with a gentle smile, framed by vibrant blooms under a pastel sky with fluffy clouds. Medium shot, slightly tilted angle, capturing renewal and natural beauty.",
    "title": "A garden in bloom",
    "description": "A woman stands among spring flowers in an oil-painted garden.",
    "selection_number": 7
  },
  {
    "key": "chunkwise_240s_050",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "Cartoon-style vibrant illustration of a fluffy white cat with big round eyes and a mischievous grin, sitting in a red toy car, driving down a busy downtown street. The cat's ears flap in the wind as the car's wheels spin forward, zipping past tall skyscrapers and bustling pedestrians. Bright, saturated colors, smooth cartoony textures, and dynamic motion lines enhance the lively urban energy. Slightly elevated camera angle captures the playful scene in full action.",
    "title": "A cat behind the wheel",
    "description": "A white cat drives a red toy car through the city.",
    "selection_number": 12
  },
  {
    "key": "chunkwise_240s_008",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "A vibrant anime-style illustration in thick, expressive brushwork depicting a young man in his 20s with short messy black hair and warm brown eyes, deeply engrossed in reading a classic leather-bound book. He sits casually on a fluffy white cloud floating in a radiant evening sky, one leg crossed over the other, wearing a simple white t-shirt and blue jeans. The background bursts with soft cotton-like clouds bathed in a golden sunset glow, casting a warm orange hue across the dreamy, ethereal atmosphere. Rendered in rich, painterly textures with a medium shot from a slightly downward angle, emphasizing his serene focus and the tranquil skyward setting.",
    "title": "Lost in a book",
    "description": "A young man reads in an expressive anime-style scene.",
    "selection_number": 4
  },
  {
    "key": "chunkwise_240s_002",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "Classic cinematic movie trailer, a determined 30-year-old space explorer journeys across a vast salt desert under a boundless blue sky. He wears a striking red wool knitted motorcycle helmet that glints in the harsh sunlight, contrasting vividly against the pale, cracked terrain. Shot on 35mm film with rich, saturated colors and fine grain texture, the scene captures sweeping desert vistas, shimmering salt flats, and endless horizons. Dynamic medium shots transition to sweeping overhead angles, emphasizing his resilience and the scale of his solitary adventure. Dramatic lighting and slow-motion details highlight every step forward.",
    "title": "Across the salt desert",
    "description": "A space explorer journeys across a vast salt desert.",
    "selection_number": 3
  },
  {
    "key": "framewise_60s_078",
    "mode": "framewise",
    "seconds": 60,
    "prompt": "A serene countryside scene featuring a brown horse grazing alongside a white sheep. The horse stands tall with a flowing mane and tail, while the sheep grazes peacefully nearby. Both animals are set against a backdrop of rolling green hills and a clear blue sky dotted with fluffy clouds. The horse's muscular body and the sheep's fluffy coat are highlighted, capturing their natural postures and interactions. Medium shot focusing on both animals in a harmonious rural setting.",
    "title": "A horse and a sheep",
    "description": "A horse and a sheep share a serene countryside scene.",
    "selection_number": 9
  },
  {
    "key": "chunkwise_240s_048",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "Vibrant food photography style, a middle-aged chef with a weathered face and focused expression rapidly chopping onions on a wooden board. He wears a crisp white apron and chef's hat, hands moving with precision under warm sunlight streaming through a window. Steam rises from a simmering pot in the background, stainless steel appliances and cluttered countertops filled with ingredients and tools. Medium shot, centered on the chef, capturing dynamic motion and intense concentration in a bustling kitchen environment.",
    "title": "In the kitchen",
    "description": "A chef chops onions on a wooden board.",
    "selection_number": 11
  },
  {
    "key": "chunkwise_240s_069",
    "mode": "chunkwise",
    "seconds": 240,
    "prompt": "Close-up of a vibrant blue parrot with shimmering, metallic feathers in vivid blues, deep indigos, and greens, glistening in natural light. The alert bird perches on a branch, eyes bright with curiosity, set against a softly blurred warm background. Lifelike detail highlights plumage texture and subtle movements. Naturalistic wildlife style, shallow depth of field.",
    "title": "The blue parrot",
    "description": "A close-up of a parrot with shimmering blue feathers.",
    "selection_number": 13
  },
  {
    "key": "framewise_60s_006",
    "mode": "framewise",
    "seconds": 60,
    "prompt": "A serene and tranquil tableau of a modern bathroom, featuring soft morning light filtering through a frosted glass window. The room is minimalist with clean white tiles and a large freestanding bathtub filled with water, steam gently rising from it. A small potted plant sits on a sleek wooden vanity beside a porcelain sink, adding a touch of greenery. The floor is covered in smooth, pale grey tiles. The scene is static, capturing the peaceful atmosphere of early morning calm. Medium shot focusing on the bathtub and surrounding area.",
    "title": "Morning light",
    "description": "Soft morning light fills a quiet modern bathroom.",
    "selection_number": 15
  },
  {
    "key": "framewise_60s_062",
    "mode": "framewise",
    "seconds": 60,
    "prompt": "A tranquil tableau set in the heart of the Utah desert, featuring a massive sandstone arch spanning the horizon. The arch, known as Delicate Arch, stands prominently against a backdrop of vast, golden sands and distant, rugged mountains. The sky is a serene blend of pastel hues, with soft clouds drifting lazily across the heavens. The landscape is quiet and still, with only the occasional gentle breeze causing slight movement in the sand and sparse vegetation. A medium shot captures the grandeur of the arch, emphasizing its size and the expansive desert surroundings.",
    "title": "Delicate Arch",
    "description": "A sandstone arch stands in the Utah desert.",
    "selection_number": 16
  },
  {
    "key": "framewise_240s_118",
    "mode": "framewise",
    "seconds": 240,
    "prompt": "A dramatic surreal photograph in realistic style, capturing vibrant wild daisies and delicate roses blooming from cracked concrete walls in an abandoned warehouse. Diverse flowers burst with vivid colors, thriving amid shadows cast by rugged surfaces. Low camera angle emphasizes nature's resurgence, reclaiming the industrial decay. Remnants of rusted machinery and faded graffiti linger in the dim background. Close-up, slightly downward view intensifies contrast between harsh urban ruins and delicate, flourishing life.",
    "title": "Flowers through concrete",
    "description": "Daisies and roses bloom through cracked concrete walls.",
    "selection_number": 18
  }
];
const RESULTS = [[[94.97, 94.85, 98.88, 96.69, 93.46, 58.09, 68.12], [98.17, 97.12, 98.94, 98.53, 64.16, 65.38, 71.06], [98.48, 97.41, 99.35, 98.69, 63.93, 66.63, 71.51]], [[97.62, 97.42, 99.08, 98.55, 63.89, 64.8, 70.5], [98.26, 96.99, 99.08, 98.17, 71.19, 64.95, 71.52], [99.08, 98.06, 99.43, 98.9, 55.38, 66.29, 71.11]], [[94.94, 95.21, 93.54, 96.75, 93.9, 55.12, 68.38], [97.72, 96.9, 97.03, 98.5, 56.97, 62.54, 71.11], [98.21, 97.31, 97.57, 98.63, 56.92, 64.74, 71.39]], [[96.36, 96.42, 96.73, 98.01, 67.04, 61.36, 70.71], [97.07, 96.81, 96.85, 98.24, 65.68, 61.89, 70.89], [98.74, 97.81, 98.24, 98.94, 53.96, 63.95, 70.9]]];
