import { useEffect } from "react";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";

export const BlogPost = () => {
  const { name } = useParams();

  useEffect(() => {}, []);

  return (
    <>
      <Header title={name!} callback="/scraps" />

      <div className="w-full bg-yellowfade rounded-xl text-left py-2 px-4">
        <p className="text-green font-bold underline my-2">
          The Surprising Benefits of Reusing Eggshells
        </p>

        <p className="text-green my-2">
          Eggshells are often seen as kitchen waste, but they’re packed with
          potential uses that can benefit your home, garden, and even your
          health. Instead of tossing them in the trash, here are some easy and
          eco-friendly ways to reuse eggshells:
        </p>

        <p className="text-green my-2">
          <strong>1. Natural Fertilizer for Plants</strong>: Eggshells are rich
          in calcium, which helps strengthen plants and improve soil health.
          Simply crush them into fine pieces and sprinkle them around your
          garden or mix them into the soil to help your plants thrive.
        </p>

        <p className="text-green my-2">
          <strong>2. Pest Control</strong>: Crushed eggshells can also deter
          garden pests like slugs and snails. When spread around the base of
          plants, the sharp edges make it difficult for pests to crawl over,
          protecting your garden naturally.
        </p>

        <p className="text-green my-2">
          <strong>3. Composting</strong>: Eggshells break down easily and add
          valuable minerals to compost. Make sure to crush them before adding
          them to your compost pile for faster decomposition.
        </p>

        <p className="text-green my-2">
          <strong>4. Household Cleaner</strong>: Eggshells can be used as a
          gentle, abrasive cleaner. Mix crushed shells with a little water and
          soap to scrub tough stains from pots, pans, or surfaces without
          scratching them.
        </p>

        <p className="text-green my-2">
          <strong>5. DIY Beauty Treatments</strong>: Eggshells can even be
          ground into a fine powder and used as a natural exfoliant in DIY face
          masks or skincare treatments, helping to remove dead skin cells and
          reveal a smoother complexion.
        </p>

        <p className="text-green my-2">
          By reusing eggshells, you can reduce waste and find sustainable
          solutions for your home and garden. So, next time you crack an egg,
          think twice before tossing those shells!
        </p>
      </div>
    </>
  );
};

export default BlogPost;
