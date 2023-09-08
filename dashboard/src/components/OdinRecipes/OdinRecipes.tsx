import React, { useState } from 'react';
// import './RecipeStyle.scss';

function OdinRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState('');

  const renderRecipe = () => {
    switch (selectedRecipe) {
      case 'AcornSquash':
        return <AcornSquash />;
      case 'HomemadeLasagna':
        return <HomemadeLasagna />;
      case 'MicrowaveBakedPotato':
        return <MicrowaveBakedPotato />;
      default:
        return <OdinRecipes />;
    }
  };

  function OdinRecipes() {
    return (
      <div>
        <h1>Odin Recipes</h1>
        <ul>
          <li>
            <button onClick={() => setSelectedRecipe('HomemadeLasagna')}>
              Homemade Lasagna
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedRecipe('AcornSquash')}>
              Acorn Squash
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedRecipe('MicrowaveBakedPotato')}>
              Microwave Baked Potato
            </button>
          </li>
        </ul>
      </div>
    );
  }

  function AcornSquash() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '900px' }}>
                <h1>Acorn Squash</h1>
                <img
                    src="https://www.allrecipes.com/thmb/gWKtlXa_borjWzer06AMsIllJOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/16796-acorn-squash-1x1-76-a112f8ea8d90419ea1836dca402d9d8c.jpg"
                    alt="Acorn Squash"
                    style={{ width: '100%' }}
                />
                <p>
                    Learn how to cook acorn squash using this quick and easy recipe. It's
                    sweet and buttery — my family loves it!
                </p>
                <ul style={{ width: '100%' }}>
                    <li>Ingredients</li>
                    <ul>
                        <li>1 medium acorn squash, halved and seeded</li>
                        <li>2 tablespoons brown sugar</li>
                        <li>1 tablespoon butter</li>
                    </ul>
                    <li>Steps</li>
                    <ol>
                        <li>Preheat the oven to 350 degrees F (175 degrees C).</li>
                        <li>
                            Place acorn squash halves cut-side down onto a cookie sheet. Bake in
                            the preheated oven until flesh begins to soften, about 30 to 45
                            minutes.
                        </li>
                        <li>
                            Remove squash from the oven and transfer one squash half, cut-side up,
                            to a deep baking dish. Spoon butter and brown sugar into the cavity.
                            Place remaining squash half, cut-side down, over top to seal.
                        </li>
                        <li>
                            Return to the oven and continue to bake until flesh is soft, 30
                            minutes.
                        </li>
                    </ol>
                </ul>
            </div>
        </div>
    );
  }

  function HomemadeLasagna() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '900px' }}>
              <h1>Homemade Lasagna</h1>
              <img
                  src="https://www.allrecipes.com/thmb/zZCLBop9DmB05w3z1LtTtWUGjcY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19344_homemade-lasagna_Rita2-1x1-1-b4f53c3ba2f4475c97665908a6fd1783.jpg"
                  alt="Homemade Lasagna"
                  style={{ width: '100%' }}
              />
              <p>
                  This is my mom's special homemade lasagna recipe with a meaty,
                  made-from-scratch tomato sauce and a deliciously cheesy filling. A more
                  traditional homemade lasagna filling would be made with ricotta but my
                  mom's recipe calls for a blend of small-curd cottage cheese and Parmesan.
                  I have found none better anywhere. Serve with a leafy green salad and
                  crusty garlic bread.
              </p>
              <ul style={{ width: '100%' }}>
                  <li>Ingredients</li>
                  <ul>
                      <li>Meat: This lasagna recipe starts with a pound of ground meat (½ pound ground pork, ½ pound lean ground beef).</li>
                      <li>Onion: A diced onion is cooked until translucent with the ground meat.</li>
                      <li>Canned tomatoes: You'll need a can of tomato sauce and a can of crushed tomatoes.</li>
                      <li>Fresh herbs: For fresh flavor, chop two tablespoons of parsley and crush one clove of garlic.</li>
                      <li>Sugar: A dash of sugar balances out all of the acidity from the tomatoes.</li>
                      <li>Spices and seasonings: This homemade lasagna is seasoned with dried basil, dried oregano, salt, and black pepper.</li>
                      <li>Noodles: Of course, you'll need lasagna noodles! This recipe calls for uncooked noodles, but you can use the oven-ready variety to save time.</li>
                      <li>Cheese: The cheese layer is made up of cottage cheese and Parmesan. You'll also need shredded mozzarella.</li>
                      <li>Eggs: Eggs make the cheese layer extra creamy. Plus, they act as a binding agent (which means they hold the layer together).</li>
                  </ul>
                  <li>Steps</li>
                  <ol>
                      <li>Cook the meat: Cook the ground meat in a skillet until browned and crumbly. Add the onion and continue cooking until it's translucent...</li>
                      <li>Cook the noodles: Boil the lasagna noodles in lightly salted water until they're al dente.</li>
                      <li>Make the cheese layer: Mix cottage cheese, Parmesan cheese, eggs, the remaining parsley, the remaining salt, and pepper in a bowl.</li>
                      <li>Assemble the lasagna: Layer the ingredients according to the recipe (starting with sauce and ending with mozzarella) until the lasagna is assembled.</li>
                      <li>Bake the lasagna: Cover with foil and bake in the preheated oven for about half an hour. Remove the foil and continue baking until the top is golden brown.</li>
                  </ol>
              </ul>
          </div>
      </div>
    );
  }

  function MicrowaveBakedPotato() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '900px' }}>
              <h1>Microwave Baked Potato</h1>
              <img
                  src="https://www.allrecipes.com/thmb/cxaoqgpqkLuAiImkSFIxPKz_yKw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/85337-microwave-baked-potato-21-edefae39276544be801966be339afbf2.jpg"
                  alt="Microwave Baked Potato"
                  style={{ width: '100%' }}
              />
              <p>
                  If you want the yummy taste of a slowly baked potato but aren't patient
                  enough, or don't have the know-how to bake it in an oven, this is for you.
                  Give it 12 minutes and get a mouthwatering, taste bud-tingling treat.
              </p>
              <ul style={{ width: '100%' }}>
                  <li>Ingredients</li>
                  <ul>
                      <li>1 large russet potato</li>
                      <li>salt and ground black pepper to taste</li>
                      <li>1 tablespoon butter</li>
                      <li>2 tablespoons shredded Cheddar cheese</li>
                      <li>1 tablespoon sour cream</li>
                  </ul>
                  <li>Steps</li>
                  <ol>
                      <li>Scrub potato and prick with a fork. Place on a microwave-safe plate.</li>
                      <li>Microwave on full power for 5 minutes. Turn potato over, and microwave until soft, about 5 more minutes.</li>
                      <li>Remove potato from the microwave, and cut in half lengthwise. Season with salt and pepper and mash up the inside a little with a fork.</li>
                      <li>Add butter and Cheddar cheese. Microwave until melted, about 1 more minute.</li>
                      <li>Top with sour cream, and serve.</li>
                  </ol>
              </ul>
          </div>
      </div>
    );
  }

  return (
    <div>
      {renderRecipe()}
    </div>
  );
}

export default OdinRecipes;
