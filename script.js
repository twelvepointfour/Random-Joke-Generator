const quotes = [
    {
        quote: "When does a joke become a dad joke?",
        answer: "When it becomes apparent!"
    },
    {
        quote: "How many apples grow on a tree?",
        answer: "All of them!"
    },
    {
        quote: "What do you call a fish with no eyes?",
        answer: "Fsh."
    },
    {
        quote: "Why don't scientists trust atoms?",
        answer: "Because they make up everything!"
    },
    {
        quote: "I have a fear of elevators...",
        answer: "But I've started taking steps to avoid it."
    },
    {
        quote: "Two peanuts were walking down the street.",
        answer: "One was a-salted!"
    },
    {
        quote: "Kid: I'll call you later",
        answer: "Dad: Don't call me later, call me dad."
    },
    {
        quote: "How do you tell the difference between a frog and a horny toad?",
        answer: "A frog says 'ribbit, ribbit', and a horny toad says 'rub it, rub it'"
    },
    {
        quote: "What do you call a man with no body and no nose?",
        answer: "Nobody nose!"
    },
    {
        quote: "What's the difference between a poorly dressed man on a tricycle, and a well-dressed man on a bicycle?",
        answer: "Attire."
    },
    {
        quote: "Dad, I'm hungry",
        answer: "Hi hungry, I'm dad"
    },
    {
        quote: "What sits on the lawn and is Irish?",
        answer: "Patty O'furniture"
    },
    {
        quote: "Did you hear about the guy who invented lifesavers?",
        answer: "They say he made a mint!"
    },
    {
        quote: "Dracula doesn't have many friends.",
        answer: "Because he's a pain in the neck."
    },
    {
        quote: "I don't fear condiments on my food,",
        answer: "I relish them!"
    },
    {
        quote: "Velcro...",
        answer: "What a rip-off!"
    },
    {
        quote: "There's an new type of broom.",
        answer: "It's sweeping the nation."
    },
    {
        quote: "conjunctivitis.com",
        answer: "Now there's a site for sore eyes!"
    },
    {
        quote: "Never trust an acupuncturist.",
        answer: "They always stab you in the back."
    },
    {
        quote: "My girlfriend and I watched Harry Potter back-to-back.", 
        answer: "Luckily, I was the one facing the TV!”
    },
    {
        quote: "I read a book about anti-gravity…",
        answer: "It was impossible to put down."
    },
    {
        quote: "Bladder infection?",
        answer: "Urine trouble!"
    },
    {
        quote: "Bicycles can’t stand on their own.",
        answer: "They’re two tyred!"
    },
    {
        quote: "I have a joke about construction.",
        answer: "But I’m still working on it."
    },
    {
        quote: "I forgot how to throw a boomerang.",
        answer: "But it came back to me."
    },
    {
        quote: "I just learned sign language.",
        answer: "It’s pretty handy!"
    },
    {
        quote: "The rotation of the Earth,",
        answer: "Really makes my day."
    },
    {
        quote: "To the guy that invented zero.",
        answer: "Thanks for nothing…"
    },
    {
        quote: "I miss the old, corded telephones.",
        answer: "They were kinky!"
    },
    {
        quote: "Vagina jokes just aren’t funny!",
        answer: "Period."
    },
    {
        quote: "I swallowed some food colouring.",
        answer: "I think I dyed inside."
    },
    {
        quote: "I couldn’t figure out my seatbelt.",
        answer: "Then it clicked."
    },
    {
        quote: "It’s hard to explain puns to kleptomaniacs.",
        answer: "They take everything literally!"
    },
    {
        quote: "I used to have a fear of hurdles.",
        answer: "But I got over it."
    },
    {
        quote: "Having sex in an elevator.",
        answer: "It’s wrong on so many levels."
    },
    {
        quote: "I used to be addicted to soap.",
        answer: "But I’m clean now."
    },
    {
        quote: "It was easy to master braille.",
        answer: "Once I got a feel for it."
    },
    {
        quote: "I held the door open for a clown.",
        answer: "It was a nice jester."
    },
    {
        quote: "The only animal at the zoo yesterday was a dog.",
        answer: "It was a shit-zu…"
    },
    {
        quote: "You can’t run through a campground.",
        answer: "You can only ran, because it’s all past tents…"
    },
    {
        quote: "Steak puns.",
        answer: "A medium where anything well done is rare."
    },
    {
        quote: "I knew I shouldn’t have had seafood.",
        answer: "I’m feeling a little eel."
    },
    {
        quote: "Why do bees hum?",
        answer: "Because they don’t know the words."
    },
    {
        quote: "What did the grape do when he got stepped on?",
        answer: "He let out a little wine!"
    },
    {
        quote: "Did you hear about the guy who invented knock-knock jokes?",
        answer: "He won a no-bell prize!"
    },
    {
        quote: "Where do you learn to make ice-cream?",
        answer: "Sundae school."
    },
    {
        quote: "What do you call cheese by itself?",
        answer: "Provolone"
    },
    {
        quote: "Why don’t skeletons ever go trick-or-treating?",
        answer: "Because they have no-body to go with!"
    },
    {
        quote: "What do you call a dear with no eyes?",
        answer: "No eye-dear!"
    },
    {
        quote: "Last night I dreamt I was a muffler.",
        answer: "I woke up exhausted."
    },
    {
        quote: "I’d like to give a shout-out to all the side-walks.",
        answer: "For keeping me off the street."
    },
    {
        quote: "What do you get when you cross a snowman and a vampire?",
        answer: "Frostbite!"
    },
    {
        quote: "What does an annoying pepper do?",
        answer: "It gets Jalapeño face."
    },
    {
        quote: "Our wedding was so beautiful.",
        answer: "Even the cake was in tiers."
    },
    {
        quote: "If a prisoner could take his own mugshots.",
        answer: "They’d be called cell-fies."
    },
    {
        quote: "What do you call cheese that isn’t yours?",
        answer: "Nacho cheese!"
    },
    {
        quote: "Why can’t you have a nose 12-inches long?",
        answer: "Because then it would be a foot!"
    },
    {
        quote: "Why did the scarecrow win an award?",
        answer: "He was out-standing in his field."
    },
    {
        quote: "My wife is on a tropical food diet, our house is full of the stuff.",
        answer: "It’s enough to make a man-go crazy!"
    },
    {
        quote: "Have you heard of the band called 1023mb?",
        answer: "They haven’t got a gig yet!"
    },
    {
        quote: "What do prisoners use to call each other?",
        answer: "Cell-phones."
    },
    {
        quote: "Did you hear the restaurant on the moon?",
        answer: "Great food, no atmosphere…"
    },
    {
        quote: "What lives at the bottom of the ocean and twitches?",
        answer: "A nervous wreck…"
    },
    {
        quote: "What do you call a pony with a sore throat?",
        answer: "A little horse."
    },
    {
        quote: "I totally understand how batteries feel.",
        answer: "I’m never included in anything either."
    },
    {
        quote: "Why couldn’t Dracula’s wife fall asleep?",
        answer: "Because of his coffin."
    },
    {
        quote: "Your family tree must be a cactus.",
        answer: "Everyone on it is a prick!"
    },
    {
        quote: "I asked my North Korean friend how it’s going there.",
        answer: "He said he couldn’t complain."
    },
    {
        quote: "What do you call a magic dog?",
        answer: "A labracadabador."
    },
    {
        quote: "Today a man knocked on my door and asked for a small donation towards the local pool.",
        answer: "I gave him a glass of water."
    },
    {
        quote: "I want to die peacefully in my sleep like my grandfather.",
        answer: "Not screaming like the passengers in his car."
    },
    {
        quote: "I still remember my grandfather’s last words.",
        answer: "Stop shaking the ladder you little bastard!"
    },
    {
        quote: "What do you call an Argentinian with a rubber toe?",
        answer: "Roberto."
    },
    {
        quote: "Why can’t you hear a pterodactyl going to the bathroom?",
        answer: "Because the pee is silent."
    },
    {
        quote: "Why did the coffee file a police report?",
        answer: "Because it got mugged!"
    },
    {
        quote: "Two satellites decided to get married.",
        answer: "The wedding wasn’t much, but the reception was amazing."
    },
    {
        quote: "I bought shoes from a drug dealer once.",
        answer: "I don’t know what he laced them with, but I was tripping all day."
    },
    {
        quote: "This graveyard looks overcrowded.",
        answer: "People must be dying to get in here."
    },
    {
        quote: "Wanna hear a joke about paper?",
        answer: "Never mind, it’s tear-able!"
    },
    {
        quote: "I just watched a program about beavers.",
        answer: "It was the best dam program I’ve ever seen."
    },
    {
        quote: "I’ve just been diagnosed as colourblind.",
        answer: "It really came out of the purple…"
    },
    {
        quote: "I’m not addicted to brake fluid.",
        answer: "I can stop anytime I like."
    },
    {
        quote: "A ham sandwich walks into a bar and orders a beer.",
        answer: "Bartender says, ‘I’m sorry, we don’t serve food here’."
    },
    {
        quote: "How do you make a kleenex dance?",
        answer: "Put a little boogie in it."
    },
    {
        quote: "I used to have a job at a calendar factory.",
        answer: "I got the sack because I took a couple of days off."
    },
    {
        quote: "How do you make holy water?",
        answer: "You boil the hell out of it."
    },
    {
        quote: "I heard there was a new store called ‘moderation’.",
        answer: "They have everything there!"
    },
    {
        quote: "I went to a bookstore and asked the saleswoman where the self-help section was?",
        answer: "She said if she told me, it would defeat the purpose."
    },
    {
        quote: "I bought myself a blindfold today.",
        answer: "But I just can’t see myself wearing it."
    },
    {
        quote: "Milk is the fastest liquid on Earth.",
        answer: "It’s pasteurised before you even see it."
    },
    {
        quote: "Do you know where you can get chicken broth in bulk?",
        answer: "The stock-market!"
    },
    {
        quote: "What did the ocean say to the shore?",
        answer: "Nothing, it just waved."
    },
    {
        quote: "Why do crabs never give to charity?",
        answer: "Because they’re shellfish!"
    },
    {
        quote: "What do you call a fish with no eyes?",
        answer: "A fsh."
    },
    {
        quote: "What do you call a man with no arms or legs lying in front of your door?",
        answer: "Matt."
    },
    {
        quote: "Without geometry.",
        answer: "Life is pointless."
    },
    {
        quote: "A termite walked into a pub.",
        answer: "He asked, ‘is the bar tender here?’."
    },
    {
        quote: "Why do giraffes never admit their mistakes?",
        answer: "Because it takes too long to swallow their pride."
    },
    {
        quote: "I gave my dead batteries away today.",
        answer: "Free of charge!"
    },
    {
        quote: "I needed a password 8 characters long.",
        answer: "I chose Snow White and the Seven Dwarves."
    },
    {
        quote: "How did the octopus beat the shark in a fight?",
        answer: "It was well armed."
    },
    {
        quote: "A red and a blue ship just collided in the Caribbean.",
        answer: "Apparently the survivors were marooned."
    },
    {
        quote: "How much does a hipster weigh?",
        answer: "An instagram."
    },
    {
        quote: "What do you call a group of killer whales playing instruments?",
        answer: "An Orca-stra."
    },
    {
        quote: "Why was the big cat disqualified from the race?",
        answer: "He was a cheetah!"
    },
    {
        quote: "Slept like a log last night.",
        answer: "Woke up in a fireplace."
    },
    {
        quote: "I’m reading a book on the history of glue.",
        answer: "I just can’t put it down."
    },
    {
        quote: "Did you hear about the kidnapping at school?",
        answer: "It’s okay, they woke up…"
    },
    {
        quote: "So, a duck walks into a pharmacy and said:",
        answer: "Give me some chap sticks and put it on my bill!"
    },
    {
        quote: "What do you do when a blonde throws a grenade at you?",
        answer: "Pull the pin and throw it back."
    },
    {
        quote: "What’s the difference between an African and an Indian elephant?",
        answer: "About 5000 miles."
    },
    {
        quote: "A man walks into a bar and orders a bag of helicopter flavoured chips.",
        answer: "The barman replies ‘sorry, we only serve plane’."
    },
    {
        quote: "Why are skeletons so calm?",
        answer: "Because nothing gets under their skin."
    },
    {
        quote: "Why do scuba divers fall backwards into the water?",
        answer: "Because if they fell forwards, they’d be in the boat!"
    },
    {
        quote: "I’m told my new book on how to best store fine wines…",
        answer: "…will be a best-cellar!"
    },
    {
        quote: "Police were called to a local day-care centre this afternoon.",
        answer: "There were 4 kids resisting a-rest."
    },
    {
        quote: "My friend told me I didn’t know the meaning of ironic.",
        answer: "Which was ironic because we were on a train!"
    },
    {
        quote: "I’ve got a broken guitar for sale.",
        answer: "No strings attached."
    },
    {
        quote: "I like riding elevators!",
        answer: "They always give me a lift."
    },
    {
        quote: "My friend bit off his tongue.",
        answer: "He doesn’t like to talk about it."
    },
    {
        quote: "I just bought a thesaurus and when I got it home, I found out that all the pages were blank!!",
        answer: "I have no words to describe how angry I am."
    },
    {
        quote: "I buy all my guns from a guy called “T-Rex”.",
        answer: "He’s a small arms dealer!"
    },
    {
        quote: "Why did Shakespeare’s wife walk out on him?",
        answer: "She was sick of all the drama."
    },
    {
        quote: "Why did the A go to the bathroom and come out an E?",
        answer: "They had a vowel movement!"
    },
    {
        quote: "Whiteboards…",
        answer: "They’re re-markable."
    },
    {
        quote: "I’ve been torturing a centipede for 98 days now.",
        answer: "It’s on its last legs now!"
    },
    {
        quote: "I just burned my Hawaiian pizza.",
        answer: "I should have cooked it at Aloha temperature."
    },
    {
        quote: "What is the difference between a bird and a fly?",
        answer: "A bird can fly, but a fly can’t bird!"
    },
    {
        quote: "What was a more useful invention than the telephone?",
        answer: "The second telephone…"
    },
    {
        quote: "Why don’t you see elephants hiding in the trees?",
        answer: "Because they’re really freaking good at it!"
    },
    {
        quote: "A book just fell on my head.",
        answer: "I have only my-shelf to blame!"
    },
    {
        quote: "My dad died last year when the doctor couldn’t work out his blood type for a transfusion.",
        answer: "He kept telling us to B positive, B positive. But it was just so hard with him dying."
    },
    {
        quote: "Why are fire trucks red?",
        answer: "Because they have 4 wheels and 8 seats, 8 + 4 is 12. There are 12 inches on a ruler. Queen Elizabeth was a ruler. Queen Elizabeth was also a ship that sailed the seas. Fish live in the sea. Fish have fins. The Fins went to war with Russia. The Russian flag is red. That is why fire trucks are red, they’re always Russian around!"
    },
    {
        quote: "I sold my vacuum cleaner last week.",
        answer: "It was just collecting dust."
    },
    {
        quote: "I told my friend I liked Beyonce, he said “whatever floats your boat”.",
        answer: "I said, “no, that’s buoyancy!”."
    },
    {
        quote: "How much does a polar bear weigh?",
        answer: "Enough to break the ice."
    },
    {
        quote: "I used to circumcise whales for a living.",
        answer: "The pay was average, but the tips were huge!"
    },
    {
        quote: "What do you call a blind dinosaur?",
        answer: "A do-you-think-he-saw-us."
    },
    {
        quote: "The inventor of throat lozenges has just died.",
        answer: "There will be no coffin at his funeral."
    },
    {
        quote: "In King Arthurs time, there was knight who dealt with taxes.",
        answer: "His name was Sir Charge."
    },
    {
        quote: "Why do cows have hooves instead of feet?",
        answer: "Because they lactose"
    },
    {
        quote: "What do you call an old lady snake?",
        answer: "A nannaconda."
    },
    {
        quote: "I met Bruce Lee’s vegetarian brother the other day.",
        answer: "His name is Broco Lee."
    },
    {
        quote: "Why are they North Koreans so good at geometry?",
        answer: "Because they have a supreme ruler."
    },
    {
        quote: "Can a kangaroo jump higher than a house?",
        answer: "Of course, houses can’t jump."
    },
    {
        quote: "My dog used to chase people on a bike a lot.",
        answer: "It got so bad that I had to take his bike away."
    },
    {
        quote: "What is the difference between a snowman and snowwoman?",
        answer: "Snowballs!"
    },
    {
        quote: "I thought I’d tell you a good time travel joke.",
        answer: "But you didn’t like it."
    },
    {
        quote: "What goes up and down, but never moves?",
        answer: "The stairs."
    },
    {
        quote: "My girlfriend says I’m snoopy.",
        answer: "But I guess it’s hard to see the context in a diary."
    },
    {
        quote: "What do you call a horse that moves around a lot?",
        answer: "Unstable."
    },
    {
        quote: "How do you tie up two martians?",
        answer: "With an Astro-knot."
    },
    {
        quote: "What did the babycorn say to the mamacorn?",
        answer: "Where’s popcorn?"
    },
    {
        quote: "What do you call a sleeping dinosaur?",
        answer: "A dinosnore."
    },
    {
        quote: "The other day my girlfriend asked me to pass her lipstick, but I accidentally passed her a glue stick.",
        answer: "She still isn’t talking to me."
    },
    {
        quote: "What grows under your nose?",
        answer: "Tulips."
    },
    {
        quote: "Did you hear the joke about the plane?",
        answer: "It’ll probably go over your head."
    },
    {
        quote: "What’s the difference between bird flu and swine flu?",
        answer: "One needs tweetment, the other needs oinkment!"
    },
    {
        quote: "What’s the difference between ignorance and apathy?",
        answer: "I don’t know and I don’t care."
    },
    {
        quote: "Why do vampires hoard stocks?",
        answer: "Because they’re terrified of stakeholders."
    },
    {
        quote: "The other day I bought myself a universal remote.",
        answer: "I thought to myself, this changes everything!"
    },
    {
        quote: "I tried drag racing last week.",
        answer: "It’s murder running in heels!"
    },
    {
        quote: "What do you call a snowman with a 6-pack?",
        answer: "The abdominal snowman."
    },
    {
        quote: "What did the drummer call his twin daughters?",
        answer: "Anna One, Anna Two…"
    },
    {
        quote: "I saw a magician who turned his audience into wind turbines.",
        answer: "I was immediately a big fan."
    },
    {
        quote: "Someone threw a bottle of Omega-3 capsules at me.",
        answer: "Luckily my injuries were super-fish-oil."
    },
    {
        quote: "Mountains aren’t just funny.",
        answer: "They’re hill-areas."
    },
    {
        quote: "How do you think the unthinkable?",
        answer: "With an itheberg…"
    },
    {
        quote: "Why was the mushroom invited to the party?",
        answer: "Because he was a fungi."
    },
    {
        quote: "What do you call a woman who sounds like an ambulance?",
        answer: "Nina"
    },
    {
        quote: "Why do bees stay in their beehives in winter?",
        answer: "Swarm."
    },
    {
        quote: "William Shatner has discontinued his range of ladies’ lingerie.",
        answer: "Apparently “Shatner Panties” proved an unpopular name."
    },
    {
        quote: "A man with a stutter died in his prison cell.",
        answer: "He was unable to finish his sentence."
    },
    {
        quote: "I’ve been told I’m condescending.",
        answer: "(Which means I talk down to people.)"
    },
    {
        quote: "Why do bees have sticky hair?",
        answer: "Because they use honeycombs."
    },
    {
        quote: "The inventor of the jigsaw puzzle died yesterday.",
        answer: "It’s said his wife is in 1500 pieces."
    },
    {
        quote: "Have you heard the story about the corduroy pillow?",
        answer: "Apparently, it’s making headlines."
    },
    {
        quote: "What type of shorts do clouds wear?",
        answer: "Thunder-pants."
    },
    {
        quote: "What do you call a classy fish?",
        answer: "Sofishticated."
    },
    {
        quote: "What do you call a bee that can’t make his mind up?",
        answer: "A may-bee."
    },
    {
        quote: "When does a regular joke become a dad joke?",
        answer: "When it’s fully groan."
    },
    {
        quote: "My first girlfriend was a tennis player. She broke my heart.",
        answer: "It was like love meant nothing to her."
    },
    {
        quote: "What do you call a chicken looking at lettuce?",
        answer: "A chicken-see’s-a-salad."
    },
    {
        quote: "I accidentally swallowed some scrabble pieces.",
        answer: "I’m just waiting on a vowel movement."
    },
    {
        quote: "My girlfriend just broke up with me because I’m addicted to gambling.",
        answer: "All I can think about is how to win her back."
    },
    {
        quote: "I can’t stand stair lifts.",
        answer: "They drive me up the wall."
    },
    {
        quote: "What sound does a 747 make when it bounces?",
        answer: "Boeing, boeing, boeing…"
    },
    {
        quote: "I answered the door this morning and a 6ft beetle punched me.",
        answer: "Apparently, there’s a nasty bug going around."
    },
    {
        quote: "I tried to explain to my 4-year-old that it’s perfectly normal to poop your pants.",
        answer: "But he’s still making fun of me."
    },
    {
        quote: "My mayonnaise is trying to kill me.",
        answer: "Or so my sauces tell me…"
    },
    {
        quote: "What type of magazines do cows read?",
        answer: "Cattle-logs."
    },
    {
        quote: "My doctor just told me I’m suffering from paranoia.",
        answer: "Well, he didn’t actually say that, but he was thinking it!"
    },
    {
        quote: "My uncle was a great conductor.",
        answer: "He was struck by lightning."
    },
    {
        quote: "I’m not condescending.",
        answer: "I’m far too busy thinking about more important things that you wouldn’t understand."
    },
    {
        quote: "What starts with an E and ends with an E but has only one letter?",
        answer: "Envelope."
    },
    {
        quote: "You can throw an envelope as far as you want.",
        answer: "It’ll still be stationary."
    },
    {
        quote: "Last night I dreamt in colour.",
        answer: "Then I realised it was a pigment of my imagination."
    },
    {
        quote: "What do you call a reluctant potato?",
        answer: "A hesitater."
    },
    {
        quote: "I have a pet tree.",
        answer: "It’s like having a pet dog, but the bark is quieter."
    },
    {
        quote: "What do you call a herd of sheep tumbling down a hill?",
        answer: "A lamb-slide."
    },
    {
        quote: "How did cavemen meet cavewomen?",
        answer: "They went clubbing."
    },
    {
        quote: "What do you call a belt made of watches?",
        answer: "A waist of time."
    },
    {
        quote: "My wife threatened to leave me because of my “filthy & disgusting habits”.",
        answer: "I was so shocked I nearly choked on my toenails."
    },
    {
        quote: "I was actually asked to help in designing the first monopoly board.",
        answer: "I thought, ‘yeah, I’ll give it a go’."
    },
    {
        quote: "What kind of tea does a real estate agent drink?",
        answer: "Proper-tea."
    },
    {
        quote: "Why was the paediatrician always losing his temper?",
        answer: "Because he has such little patients."
    },
    {
        quote: "I like waiters.",
        answer: "They bring a lot to the table."
    },
    {
        quote: "What do you call an alligator with satnav?",
        answer: "A navigator."
    },
    {
        quote: "Why was the archaeologist so depressed?",
        answer: "Because his life was in ruins."
    },
    {
        quote: "How do flat earthers travel the world?",
        answer: "On a plane."
    },
    {
        quote: "Which countries capital is the fastest growing?",
        answer: "Ireland – every year it’s Dublin."
    },
    {
        quote: "What did the DNA say to the other DNA?",
        answer: "Do these genes make my butt look good?"
    },
    {
        quote: "You’d think a snail would be faster without its shell.",
        answer: "But it’s actually more sluggish."
    },
    {
        quote: "The only thing flat earthers have to fear,",
        answer: "Is sphere itself."
    },
    {
        quote: "My wife just left me because I’m too insecure.",
        answer: "No wait, she’s back! She just went to go get coffee…"
    },
    {
        quote: "When we make pizza at home, it’s my wife’s job to prepare the cheese.",
        answer: "She’s the gratist."
    },
    {
        quote: "Why did the blonde get excited when she finished her puzzle in 6-months?",
        answer: "The box said 2-4 years!"
    },
    {
        quote: "Apparently Tolkien considered setting The Lord of the Rings in Antarctica.",
        answer: "Until he found out it was uninhobbitable."
    },
    {
        quote: "You know you’re ugly when you go to take a group photo,",
        answer: "And they hand you the camera."
    },
    {
        quote: "I never knew how technologically advanced Moses was.",
        answer: "He had the first tablet to connect to the cloud."
    },
    {
        quote: "Whoever said technology would replace paper.",
        answer: "Never tried to wipe their behind with an iPad."
    },
    {
        quote: "I’m a kleptomaniac.",
        answer: "But when it gets too bad, I take something for it."
    },
    {
        quote: "What do fish need to stay healthy?",
        answer: "Vitamin Sea."
    },
    {
        quote: "What’s a leppers favourite song?",
        answer: "Footloose."
    },
    {
        quote: "What do you get when you drop a piano down a mineshaft?",
        answer: "A-flat minor."
    },
    {
        quote: "What do you call a cow that eats your grass?",
        answer: "A lawn moo-er."
    },
    {
        quote: "I’ve been trying to climb the ladder at work for years now.",
        answer: "Maybe I’m not cut out to be a firefighter."
    },
    {
        quote: "Our ice-cream man was found on the floor of his van covered in hundreds & thousands.",
        answer: "The police say he topped himself."
    },
    {
        quote: "Did you hear about the mother who gave birth in the sky?",
        answer: "I guess you could say the baby was air-borne."
    },
    {
        quote: "I wrote a song about a tortilla.",
        answer: "I guess it’s more of a rap."
    },
    {
        quote: "A man goes to the doctor with a strawberry growing out of his head.",
        answer: "The doc said, “I’ll give you some cream to put on top of that.”"
    },
    {
        quote: "People who use selfie sticks really need to take a good long look at themselves.",
        answer: " " // Answer left blank as it's a punchline within the quote setup
    },
    {
        quote: "My wife is so pessimistic that if there was an Olympics for pessimism.",
        answer: "She wouldn’t favour herself to win."
    },
    {
        quote: "‘What do you get when you cross a fish and a banker?",
        answer: "A loan shark."
    },
    {
        quote: "What’s the difference between a sock and a camera?",
        answer: "One takes photo’s, one takes five-toes."
    },
    {
        quote: "I was thinking of running a marathon.",
        answer: "But I think it might be too difficult getting the roads closed and providing water to everyone."
    },
    {
        quote: "I had a pelican curry last night.",
        answer: "It was delicious, but you should have seen the bill."
    },
    {
        quote: "I told my wife she drew her eyebrows too high.",
        answer: "She seemed surprised."
    },
    {
        quote: "Why does a squirrel swim on its back?",
        answer: "To keep its nuts dry."
    },
    {
        quote: "My grandfather has the heart of a lion.",
        answer: "And a lifetime ban from the zoo."
    },
    {
        quote: "My wife sighed, ‘Why does everything have to be a game with you?’.",
        answer: "An excellent question honey, but next time use the buzzer please."
    },
    {
        quote: "I refused to believe my roadworker dad was stealing from work.",
        answer: "But when I got home, all the signs were there."
    },
    {
        quote: "My girlfriend told me she was leaving me because I keep pretending to be a transformer.",
        answer: "I said, ‘no, wait, I can change!’."
    },
    {
        quote: "I hate Russian dolls.",
        answer: "They’re so full of themselves."
    },
    {
        quote: "What did the finger say to the thumb?",
        answer: "I’m in glove with you."
    },
    {
        quote: "What do you call a cow that produces no milk?",
        answer: "An udder failure."
    },
    {
        quote: "What kind of horses go out after dark?",
        answer: "Nightmares."
    },
    {
        quote: "You can distinguish an alligator from a crocodile by paying attention to whether the animal says, ‘see you later’ or ‘in a while’.",
        answer: " " // Answer left blank as the joke is in the quote
    },
    {
        quote: "What happened when the butcher backed into his meat grinder?",
        answer: "He got behind on his work."
    },
    {
        quote: "How do fish get high?",
        answer: "Seaweed."
    },
    {
        quote: "Why did the pig leave the costume party?",
        answer: "Because everyone thought he was a boar."
    },
    {
        quote: "What’s the difference between a smart man and a dumb man?",
        answer: "Nothing, they both think they know everything."
    },
    {
        quote: "So what if I don’t know what Armageddon means?",
        answer: "It’s not like it’s the end of the world!"
    },
    {
        quote: "What’s the difference between a hippo and a zippo?",
        answer: "One is heavy, and one is a little lighter."
    },
    {
        quote: "I wanted to tell a chemistry joke.",
        answer: "But I was afraid of a bad reaction."
    },
    {
        quote: "What do you get when you crossbreed a shark and a cow?",
        answer: "I don’t know, but I wouldn’t try milking it."
    },
    {
        quote: "Where do cows go on a date?",
        answer: "The moo-vies."
    },
    {
        quote: "I used to work in a shoe factory.",
        answer: "It was sole destroying."
    },
    {
        quote: "And the lord said unto John “come forth and you will receive eternal life”.",
        answer: "But John came 5th and won a toaster."
    },
    {
        quote: "My friend bought a dog from a blacksmith.",
        answer: "As soon as he got home, he made a bolt for the door."
    },
    {
        quote: "This morning a criminal broke into a dog rescue centre and released all the dogs…",
        answer: "The police are desperately looking for leads."
    },
    {
        quote: "What jam can’t you eat?",
        answer: "Traffic jam."
    },
    {
        quote: "What do you call a line of rabbits moving backwards?",
        answer: "A receding hare line."
    },
    {
        quote: "I keep trying to lose weight.",
        answer: "But it keeps finding me."
    },
    {
        quote: "Why can’t the T-Rex clap?",
        answer: "Because it’s dead."
    },
    {
        quote: "Why was Tigger so dirty?",
        answer: "Because he was playing with Pooh."
    },
    {
        quote: "Why don’t ghosts like rain?",
        answer: "It dampens their spirits."
    },
    {
        quote: "I wasn’t originally going to get a brain transplant.",
        answer: "But then I changed my mind."
    },
    {
        quote: "I’m so poor.",
        answer: "I can’t even pay attention."
    },
    {
        quote: "I always wanted to be a mirror salesman.",
        answer: "It’s just something I could always see myself doing."
    },
    {
        quote: "Why did the noodle get a ticket?",
        answer: "It rolled pasta stop sign."
    },
    {
        quote: "Why are librarians so strict?",
        answer: "Because they have to go by the books."
    },
    {
        quote: "What do you call a spooky burrito?",
        answer: "A boo-rito."
    },
    {
        quote: "Do you know why I make puns?",
        answer: "It’s my respunsibility."
    },
    {
        quote: "A friend of mine lost his job at a mint factory.",
        answer: "His wife went menthol."
    },
    {
        quote: "What did the seal with a broken arm say to the shark?",
        answer: "Do not consume if seal is broken."
    },
    {
        quote: "My mum bought me a cheap dictionary for my birthday.",
        answer: "I couldn’t find the words to thank her."
    },
    {
        quote: "What do you call a priest that becomes a lawyer?",
        answer: "A father-in-law."
    },
    {
        quote: "What did the police nut say to the criminal nut?",
        answer: "I’m a cashew!"
    },
    {
        quote: "My dad always used to say, ‘the sky’s the limit’.",
        answer: "Which is probably why he got fired from NASA."
    },
    {
        quote: "How do you fix a broken pumpkin?",
        answer: "With a pumpkin patch."
    },
    {
        quote: "Why can’t the pirate say the alphabet?",
        answer: "He always gets lost at ‘c’."
    },
    {
        quote: "Never trust someone with graph paper.",
        answer: "They’re always plotting someone."
    },
    {
        quote: "What did the janitor say when he popped out of the closet?",
        answer: "SUPPLIES!!"
    },
    {
        quote: "I love telling cheesy jokes.",
        answer: "But my friends are lactose intolerant."
    },
    {
        quote: "Why don’t cannibals eat clowns?",
        answer: "Because they taste funny."
    },
    {
        quote: "What does a thesaurus eat for breakfast?",
        answer: "A synonym roll."
    },
    {
        quote: "How does Moses make coffee?",
        answer: "Hebrews it."
    },
    {
        quote: "What do you get from walking in the rain?",
        answer: "Wet."
    },
    {
        quote: "Are you a geologist?",
        answer: "Because you rock!"
    },
    {
        quote: "Looking at my face is like reading in the car.",
        answer: "It’s alright for 10 minutes, then you start to get sick."
    },
    {
        quote: "My recliner and I go waaaaay back.",
        answer: " " // Answer left blank as it's a quote setup
    },
    {
        quote: "When I was younger I was a man stuck in a woman’s body.",
        answer: "Then I was born."
    },
    {
        quote: "What kind of lights did Noah use on his ark?",
        answer: "Flood lights."
    },
    {
        quote: "What do you call a bear with no ears?",
        answer: "A ‘B’."
    },
    {
        quote: "Did you know that before the crowbar was invented, crows used to eat at home.",
        answer: " " // Answer left blank as the joke is in the quote
    },
    {
        quote: "How do you know if a sniper likes you?",
        answer: "He misses you."
    },
    {
        quote: "Why do fish live in salt water?",
        answer: "If they lived in pepper, they’d sneeze."
    },
    {
        quote: "A man is washing his car with his son.",
        answer: "His son asks, ‘couldn’t you use a sponge?!’."
    },
    {
        quote: "We can’t take our dog to the pond anymore; the ducks keep attacking it.",
        answer: "That’s what you get for buying a pure-bread dog."
    },
    {
        quote: "Took a woman who loves lemonade on a date.",
        answer: "I schwepped her off her feet."
    },
    {
        quote: "I always bring an extra pair of socks when I go golfing.",
        answer: "In case I get a hole in one."
    },
    {
        quote: "Why didn’t the skeleton cross the road?",
        answer: "He didn’t have the guts."
    },
    {
        quote: "What do a dwarf and a midget have in common?",
        answer: "Very little."
    },
    {
        quote: "Why was the lego man sick?",
        answer: "He had a blocked nose."
    },
    {
        quote: "The future, present, and the past walked into a bar.",
        answer: "It got a little tense."
    },
    {
        quote: "What happens when a frogs car breaks down?",
        answer: "It gets toad."
    },
    {
        quote: "I went to buy some camouflage trousers the other day.",
        answer: "I couldn’t find any."
    },
    {
        quote: "I had a few jokes about unemployed people.",
        answer: "It doesn’t matter, they didn’t work."
    },
    {
        quote: "Why did the cucumber blush?",
        answer: "It saw the salad dressing."
    },
    {
        quote: "What did the big chimney say to the little chimney?",
        answer: "You’re too young to smoke!"
    },
    {
        quote: "Did you hear about the fire at the circus?",
        answer: "It was intents."
    },
    {
        quote: "Why should you never let Usain Bolt use your toilet?",
        answer: "Because he has the runs."
    },
    {
        quote: "I went to a fancy dress party at the pub dressed as a tennis ball.",
        answer: "I was served immediately."
    },
    {
        quote: "I was thinking of moving to Moscow.",
        answer: "But there’s no point Russian into anything."
    },
    {
        quote: "How does a penguin build a house?",
        answer: "Igloo’s it together."
    },
    {
        quote: "Have you heard the rumour about butter?",
        answer: "Well, I probably shouldn’t spread it."
    },
    {
        quote: "Did you hear about the short-sighted circumciser?",
        answer: "He got the sack!"
    },
    {
        quote: "What do you call a duck addicted to drugs?",
        answer: "A quack addict."
    },
    {
        quote: "Did you hear about the magic tractor?",
        answer: "He was driving down the road and turned into a paddock."
    },
    {
        quote: "My friend David lost his ID.",
        answer: "I call him Dav now."
    },
    {
        quote: "Just had a once in a lifetime experience.",
        answer: "I’ll never be doing that again."
    },
    {
        quote: "My friend was a limo driver for 25 years and never had a customer.",
        answer: "All that time, and nothing to chauffer it."
    },
    {
        quote: "What is the least spoken language in the world?",
        answer: "Sign language."
    },
    {
        quote: "Where do sheep get their hair cut?",
        answer: "At the baa-baa."
    },
    {
        quote: "What do you call a wolf that knows what is going on?",
        answer: "Aware wolf."
    },
    {
        quote: "How does an evil cow laugh?",
        answer: "Moo-ha-ha-ha."
    },
    {
        quote: "I saw a documentary about camping.",
        answer: "It was in-tents!"
    },
    {
        quote: "What do you call an elephant that doesn’t matter?",
        answer: "An irrelephant!"
    },
    {
        quote: "What type of exercise do lazy people do?",
        answer: "Diddly squats."
    },
    {
        quote: "How does the moon cut its hair?",
        answer: "It eclipse it."
    },
    {
        quote: "The boiled water died.",
        answer: "It will be mist."
    },
    {
        quote: "How many beers does it take to get a tropical bird drunk?",
        answer: "Toucans"
    },
    {
        quote: "Why did the baker have smelly fingers?",
        answer: "Because he kneaded a poo."
    },
    {
        quote: "How many tickles does it take to make an octopus laugh?",
        answer: "Tentickles."
    },
    {
        quote: "What do you call a cheap circumcision?",
        answer: "A rip-off."
    },
    {
        quote: "Why didn’t the toilet paper cross the road?",
        answer: "It got stuck in the crack."
    },
    {
        quote: "I broke up with my gym.",
        answer: "We just weren’t working out."
    },
    {
        quote: "How did the telephone propose to his girlfriend?",
        answer: "He gave her a ring."
    },
    {
        quote: "I like my ceiling.",
        answer: "It’s not the best, but it’s up there."
    },
    {
        quote: "Why was the plane sad?",
        answer: "It was under the weather."
    },
    {
        quote: "I should have been sad when my flashlight died.",
        answer: "But I was de-lighted."
    },
    {
        quote: "Did you hear about the cross-eyed teacher?",
        answer: "He couldn’t control his pupils."
    },
    {
        quote: "Why did the hen stop laying?",
        answer: "She was going through menopause."
    },
    {
        quote: "I once had a hen that could count its own eggs.",
        answer: "It was a mathema-chicken."
    },
    {
        quote: "Why couldn’t the music teacher enter his classroom?",
        answer: "His keys were on his piano."
    },
    {
        quote: "If sadness was a vegetable.",
        answer: "It would be a despairagus."
    },
    {
        quote: "What are the jokes you tell in quarantine?",
        answer: "Inside jokes."
    },
    {
        quote: "Why are ghosts cheap to invite to parties?",
        answer: "They bring their own boo’s."
    }

];

const newJokeBtn = document.getElementById('new-joke-btn');
const quoteText = document.getElementById('quote-text'); 
const quoteAnswer = document.getElementById('quote-answer'); 

function displayRandomQuote () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.textContent = randomQuote.quote;
    quoteAnswer.textContent = randomQuote.answer;
}

newJokeBtn.addEventListener('click', displayRandomQuote);

displayRandomQuote();
