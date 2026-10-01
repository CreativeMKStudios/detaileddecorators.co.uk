export interface Area {
  slug: string;
  name: string;
  county: string;
  line: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  paragraphs: string[];
  jobs: string[];
  nearby: string[];
}

export const areas: Area[] = [
  {
    slug: 'bedford',
    name: 'Bedford',
    county: 'Bedfordshire',
    line: 'Town centre, Queens Park, Putnoe and the newer estates.',
    metaTitle: 'Painters & Decorators in Bedford | Detailed Decorators',
    metaDescription:
      'Bedford painters based in Biddenham. Houses, flats and shops from Queens Park to Putnoe. Free survey with Adam. Call 01234 900 002.',
    lede: 'We are based in Biddenham, a few minutes from Bedford town centre. Houses, flats and commercial rooms across Bedford are the core of the week.',
    paragraphs: [
      'Bedford has a mix of homes and they need different work. Queens Park and the streets off the river have Victorian terraces, where halls, stairs and sash windows come up again and again. De Parys and the roads around the castle have larger houses, with more woodwork and higher ceilings. Putnoe, Brickhill and Goldington are full of family semis that need a full repaint every few years.',
      'Newer homes at Great Denham, Shortstown and Wixams often need a first proper decoration once the builder’s emulsion has had a year of real life. Shops and offices in town are booked when the space can close.',
      'The Great Ouse and the Embankment set the town. A lot of our Bedford days start there and finish in a village the same afternoon. Elstow, Renhold, Newnham and London Road are all on that round.',
    ],
    jobs: ['Halls, stairs and landings', 'Sash windows and outside woodwork', 'Full house repaints', 'Shop and office decoration'],
    nearby: ['biddenham', 'kempston', 'great-denham', 'clapham', 'bromham'],
  },
  {
    slug: 'biddenham',
    name: 'Biddenham',
    county: 'Bedfordshire',
    line: 'Our home village, on the west side of Bedford.',
    metaTitle: 'Painters & Decorators in Biddenham | Detailed Decorators',
    metaDescription:
      'Local painters in Biddenham, Bedford. We are based on Franklyn Gardens. Free home survey. Call 01234 900 002.',
    lede: 'Detailed Decorators is based at 12 Franklyn Gardens in Biddenham. If you live in the village, we are already nearby.',
    paragraphs: [
      'Biddenham sits on a loop of the Great Ouse, west of Bedford. The old village around the church is one kind of house. The later closes, including roads like Franklyn Gardens, are another. Both need careful work: period details in the older homes, and clean modern lines in the newer ones.',
      'Because we start the day here, a Biddenham job is simple to reach. Great Denham is next door. Bromham, Oakley and the west side of Bedford are a short drive. Many of our regular customers are in this pocket of the town.',
      'Adam comes to you for the survey. The Franklyn Gardens address is the office. Please call before you travel, as it is not a walk-in shop.',
    ],
    jobs: ['Whole-house decoration', 'Woodwork and doors', 'Small repairs before paint', 'Local repeat work'],
    nearby: ['bedford', 'great-denham', 'bromham', 'oakley', 'kempston'],
  },
  {
    slug: 'kempston',
    name: 'Kempston',
    county: 'Bedfordshire',
    line: 'South of the river, from the High Street to the newer closes.',
    metaTitle: 'Painters & Decorators in Kempston | Detailed Decorators',
    metaDescription:
      'Painters and decorators in Kempston, Bedford. Homes south of the Ouse, with a free survey. Call 01234 900 002.',
    lede: 'Kempston is across the river from Bedford town centre, and it is a regular trip from our Biddenham base.',
    paragraphs: [
      'Kempston still feels like its own place. The High Street and the older streets have houses that have been painted many times, so prep matters more than a quick coat. Newer closes further out are family homes that need halls, bedrooms and the odd full repaint.',
      'Kempston Rural and the lanes towards Wootton are on the same round. If the job is a terrace near the church end or a newer house on the edge, the way we work does not change: cover the furniture, paint on back-to-back days, and take the mess away.',
    ],
    jobs: ['Terrace repaints', 'Halls and stairs', 'Bedroom updates', 'Exterior woodwork'],
    nearby: ['bedford', 'wootton', 'wixams', 'biddenham'],
  },
  {
    slug: 'great-denham',
    name: 'Great Denham',
    county: 'Bedfordshire',
    line: 'Newer houses, including the first proper repaint after a new build.',
    metaTitle: 'Painters in Great Denham, Bedford | Detailed Decorators',
    metaDescription:
      'Decorating in Great Denham, Bedford. New-build repaints and full rooms, a few minutes from our Biddenham base. Call 01234 900 002.',
    lede: 'Great Denham is the newer estate just west of Bedford, next to Biddenham. We are there often.',
    paragraphs: [
      'Most of Great Denham was built from the 2000s onward. The houses are light and the roads are wide, and the country park sits in the middle. The decorating jobs are different from a Victorian terrace. Builder’s emulsion is thin. After a year or two, people want a finish that wipes clean and a colour they actually chose.',
      'People often ask for a new-build repaint while they are out at work. We agree access, protect the new floors, and keep you posted.',
      'Snagging decoration, a change of colour in the main rooms, and fitted storage in box rooms are the jobs we see most.',
    ],
    jobs: ['New-build repaints', 'Colour changes after moving in', 'Floor protection on new floors', 'Storage in spare rooms'],
    nearby: ['biddenham', 'bedford', 'bromham', 'oakley'],
  },
  {
    slug: 'wixams',
    name: 'Wixams',
    county: 'Bedfordshire',
    line: 'The growing town south of Bedford, between Elstow and Wilstead.',
    metaTitle: 'Painters & Decorators in Wixams | Detailed Decorators',
    metaDescription:
      'Decorating for Wixams homes, south of Bedford. New houses, clear quotes, free survey. Call 01234 900 002.',
    lede: 'Wixams is the new settlement south of Bedford, between Elstow and Wilstead. The houses are new, and the decorating needs are too.',
    paragraphs: [
      'Wixams is still growing. Most homes are modern, with open halls and stairs that show every mark. People book us when they want their own colours, or when a room has been lived in and the first coat has scuffed.',
      'The drive from Biddenham is straightforward, down through Bedford and out past Elstow. We also pick up Wilstead, Elstow and Shortstown on the same side of town when the diary lines up.',
      'New stairs, landings and the main living rooms are the usual brief. If the house still needs flooring or storage, that can go on the same quote.',
    ],
    jobs: ['New-home decoration', 'Stairs and landings', 'Living room colour changes', 'Flooring with the paint'],
    nearby: ['bedford', 'kempston', 'ampthill', 'wootton'],
  },
  {
    slug: 'bromham',
    name: 'Bromham',
    county: 'Bedfordshire',
    line: 'Village stone and brick, north-west of Bedford.',
    metaTitle: 'Painters & Decorators in Bromham | Detailed Decorators',
    metaDescription:
      'Village painters for Bromham, near Bedford. Older brick and stone houses, plus newer edges. Call 01234 900 002.',
    lede: 'Bromham is a few minutes north-west of Biddenham, over the river. The mill and the bridge mark an older village with a mix of houses.',
    paragraphs: [
      'The centre of Bromham has brick and stone houses, some with thick walls and woodwork that needs patience. A quick coat will not sit well on old joinery. We fill, sand and prime, then paint.',
      'The edges of the village have newer homes as well. Those jobs are closer to Great Denham: clean lines, modern colours, and a tidy handover.',
      'Outside work is common here. Fascias, windows and garden woodwork take a beating. We book that when the weather is fit, and we say so in the quote.',
    ],
    jobs: ['Period woodwork', 'Exterior windows and fascias', 'Full village-house repaints', 'Newer homes on the edge'],
    nearby: ['biddenham', 'oakley', 'bedford', 'great-denham'],
  },
  {
    slug: 'clapham',
    name: 'Clapham',
    county: 'Bedfordshire',
    line: 'The Bedfordshire village on the A6, not Clapham in London.',
    metaTitle: 'Painters in Clapham, Bedford | Detailed Decorators',
    metaDescription:
      'Painters for Clapham village, north of Bedford. Not Clapham in London. Free survey from our Biddenham team. Call 01234 900 002.',
    lede: 'This is Clapham in Bedfordshire, north of Bedford on the way towards Rushden. It is not Clapham in London.',
    paragraphs: [
      'Clapham village has a high street, older houses, and newer streets off to the side. From Biddenham we come through Bedford and out on the A6. It is a normal local job, not a long trip.',
      'The older houses need the same care as Bromham: sound prep on woodwork, and paint that suits a home with some age. Newer houses on the edge are straightforward repaints.',
      'If you searched for Clapham and you meant London, we do take some London work. Read the London page, because that is a different kind of booking.',
    ],
    jobs: ['Village house decoration', 'Woodwork repairs before paint', 'Halls and stairs', 'Outside joinery'],
    nearby: ['bedford', 'bromham', 'oakley', 'london'],
  },
  {
    slug: 'oakley',
    name: 'Oakley',
    county: 'Bedfordshire',
    line: 'On the road west, between Bedford and Milton Keynes.',
    metaTitle: 'Painters & Decorators in Oakley | Detailed Decorators',
    metaDescription:
      'Decorating in Oakley, Bedfordshire. Village homes between Bedford and Milton Keynes. Call 01234 900 002.',
    lede: 'Oakley sits west of Bedford, on the way towards Milton Keynes. From Biddenham it is a short hop past Bromham.',
    paragraphs: [
      'Oakley is a village with older cottages and later estate homes. Both are on our round. The cottages often need careful woodwork and a calm colour. The later houses need a solid repaint and, sometimes, new flooring or storage.',
      'People here also ask about the outside: windows, gutters and the garden side of the house. We look at that on the same survey as the inside, so you can choose to do it together or later.',
      'Milton Keynes is the next town west if your job is larger and you are between the two. We cover both.',
    ],
    jobs: ['Cottage decoration', 'Estate house repaints', 'Windows and gutters', 'Flooring with the paint'],
    nearby: ['bromham', 'biddenham', 'milton-keynes', 'bedford'],
  },
  {
    slug: 'wootton',
    name: 'Wootton',
    county: 'Bedfordshire',
    line: 'South-west of Bedford, older lanes and newer homes.',
    metaTitle: 'Painters & Decorators in Wootton | Detailed Decorators',
    metaDescription:
      'Painters in Wootton, near Bedford. Village houses and newer homes, with a free survey. Call 01234 900 002.',
    lede: 'Wootton is south-west of Bedford, a short drive from Kempston. The village has older lanes and a lot of newer housing.',
    paragraphs: [
      'The older part of Wootton is a village. The newer parts are family houses with stairs, landings and rooms that take a knock from daily life. We do both.',
      'Stewartby and the roads towards Wixams are close. If you are between Wootton and Kempston, you are well inside the area we cover every week.',
      'A typical booking is two or three rooms, or a hall and stairs, done on back-to-back days so the house can settle again quickly.',
    ],
    jobs: ['Family house repaints', 'Halls and stairs', 'Two or three room updates', 'Exterior woodwork'],
    nearby: ['kempston', 'wixams', 'bedford', 'ampthill'],
  },
  {
    slug: 'ampthill',
    name: 'Ampthill',
    county: 'Bedfordshire',
    line: 'Georgian market town, about eight miles south of Bedford.',
    metaTitle: 'Painters & Decorators in Ampthill | Detailed Decorators',
    metaDescription:
      'Decorating in Ampthill, Bedfordshire. Period town houses and nearby villages, surveyed for free. Call 01234 900 002.',
    lede: 'Ampthill is the Georgian market town about eight miles south of Bedford. The greens, the Alameda and the old high street set the character of the houses.',
    paragraphs: [
      'Period houses in Ampthill reward a slower prep. Cornices, sash windows and panelled doors need filling and sanding, not a thick coat over the last one. We talk about colour in the room, because north light and a busy high street ask for different finishes.',
      'There is newer housing around the town as well. Flitwick is the next stop south, and Wixams is back towards Bedford. We group these trips when we can.',
      'Shops on and near the market place can be decorated too. Tell us when you can close, and we will plan the days around the business.',
    ],
    jobs: ['Period woodwork and cornice', 'Sash windows', 'Town house decoration', 'Shop decoration'],
    nearby: ['flitwick', 'wixams', 'bedford', 'wootton'],
  },
  {
    slug: 'flitwick',
    name: 'Flitwick',
    county: 'Bedfordshire',
    line: 'Family houses near the Thameslink station, south of Ampthill.',
    metaTitle: 'Painters & Decorators in Flitwick | Detailed Decorators',
    metaDescription:
      'Painters in Flitwick, Bedfordshire. Family homes near the station, free survey from Bedford. Call 01234 900 002.',
    lede: 'Flitwick is a commuter town in mid Bedfordshire, with the Thameslink station and streets of family houses.',
    paragraphs: [
      'A lot of Flitwick is 1960s to recent housing. The jobs are practical: halls and stairs, bedrooms before a move, and a full repaint when the children have grown. People often want a wipe-clean finish, which is the paint we use as standard.',
      'The drive from Biddenham is about ten miles, past Ampthill. We are happy to come. If the job is a single small room and the diary is full, we will say so rather than squeeze it in.',
      'Westoning, Ampthill and the villages between are on the same road. Ask if you are just outside Flitwick.',
    ],
    jobs: ['Family home repaints', 'Wipe-clean finishes', 'Stairs and bedrooms', 'Pre-move decoration'],
    nearby: ['ampthill', 'wixams', 'bedford'],
  },
  {
    slug: 'biggleswade',
    name: 'Biggleswade',
    county: 'Bedfordshire',
    line: 'The market town to the east, towards the A1.',
    metaTitle: 'Painters & Decorators in Biggleswade | Detailed Decorators',
    metaDescription:
      'Decorating in Biggleswade and east Bedfordshire. Houses and commercial rooms, with a free survey. Call 01234 900 002.',
    lede: 'Biggleswade is the market town on the east side of the county, about twelve miles from Bedford, close to the A1 and the River Ivel.',
    paragraphs: [
      'The town centre has older houses and shops. Estates such as the newer streets on the edge are family homes. We cover both, and we also look at Sandy when a job is already booked on this side of the county.',
      'It is a longer drive than Kempston or Clapham, so we like to book a clear run of days rather than a single short visit. Adam will tell you if the size of the job suits the trip.',
      'Exterior work is common on this side of the county, where weather hits fascias and render. We can quote the outside with the inside.',
    ],
    jobs: ['Town house decoration', 'Newer estate repaints', 'Fascias and render', 'Shop fronts and commercial rooms'],
    nearby: ['bedford', 'flitwick'],
  },
  {
    slug: 'milton-keynes',
    name: 'Milton Keynes',
    county: 'Buckinghamshire',
    line: 'The main Buckinghamshire town we cover, about half an hour away.',
    metaTitle: 'Painters & Decorators in Milton Keynes | Detailed Decorators',
    metaDescription:
      'Painters covering Milton Keynes from Bedford. Houses, apartments and small commercial units. Call 01234 900 002.',
    lede: 'Milton Keynes is about twenty miles west of Biddenham, usually around half an hour on the A421. It is the main Buckinghamshire town we work in.',
    paragraphs: [
      'Milton Keynes is a grid of neighbourhoods, with older towns folded in: Bletchley, Stony Stratford, Wolverton and Newport Pagnell. Olney is a little further north. We cover these when the job is worth the trip, and we say so at the survey.',
      'The houses are often newer than central Bedford. Whole-house emulsion, a repaint after a few years, and commercial units are the usual briefs. Apartments need tidy protection of shared halls, which we plan before we arrive.',
      'We are a Bedford firm that travels to Milton Keynes. We are not pretending to have a yard in the city. The quote includes the travel, and the team stays on the job until that phase is done.',
    ],
    jobs: ['Whole-house repaints', 'Apartment decoration', 'Small commercial units', 'Work in Bletchley, Stony Stratford and Newport Pagnell'],
    nearby: ['oakley', 'bedford', 'london'],
  },
  {
    slug: 'london',
    name: 'London',
    county: 'London',
    line: 'Selected London jobs, agreed after a survey.',
    metaTitle: 'Decorators for London Jobs | Detailed Decorators',
    metaDescription:
      'Detailed Decorators take selected London decorating jobs from their Bedford base. Travel is agreed in the quote. Call 01234 900 002.',
    lede: 'We do take work in London. It is not a daily local round in the way Bedford is. The quote includes travel, and we only book jobs that suit the distance.',
    paragraphs: [
      'Bedford to London is a real journey, up the M1 or on the train from Flitwick. A small one-room job rarely makes sense. A full flat, a house, or a commercial space can. Adam will tell you which it is after he has heard the brief, and he will survey before you commit.',
      'Please do not read this page as a claim that we are the local decorator for every borough. We are a Biddenham firm. London clients book us for a planned run of days. The team arrives, works through, and finishes.',
      'If you are in Clapham in London, you are in the right place. If you meant Clapham village near Bedford, use the Clapham page instead.',
    ],
    jobs: ['Full flats and houses', 'Planned runs of days', 'Commercial rooms', 'Jobs where travel is priced in'],
    nearby: ['bedford', 'flitwick', 'milton-keynes', 'clapham'],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
