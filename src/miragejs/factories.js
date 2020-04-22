import { Factory } from "miragejs";
import faker from "faker";
import shuffle from "lodash/shuffle";

const images = [
  "/kaPTm06WnoqaHOgGbQaRCrupaKo.jpg",
  "/2ex2beZ4ssMeOduLD0ILzXKCiep.jpg",
  "/k22mrpAzZNRR5ktD5Wb7rMlxemS.jpg",
  "/eQQXtiYSlBGWtabOb1XuRz7t6uV.jpg",
  "/enNSnMYj78ihLmiWrB4K6ymv9ux.jpg",
  "/fGL6l9ArylsiWymjOd5H2I7uTFz.jpg",
  "/6396QiokQBiTgPgB16nUWxYdM7N.jpg",
  "/f90JqHKdgx66FhMNOuFiwHU4biB.jpg",
  "/b8S7U5DlEr8rebvsNm3Lvn4Gh5s.jpg",
  "/kdjNM3yOwtQkJIwHZPqvyY4p0Ul.jpg",
  "/vgUblgYG86Px3zSHQZT7BIFfrVF.jpg",
  "/kd9jFTTabg4xJpHDgxY0h8F9BzG.jpg",
  "/44mAbdjGrJJQ4hzkKx2Z2EsninZ.jpg",
  "/umecegsPpKr2ZXA62Da9CQBVoIO.jpg",
  "/6pnQWGcjGizszK37ohzmaaisjby.jpg",
  "/exdjjcZmOQrq1219Q4mSovQnkvZ.jpg",
  "/uxTgNkY7nxnYbbovZeY5yXaUP82.jpg",
];

const titles = ["movie1", "movie2", "movie3"];

export const factories = {
  movie: Factory.extend({
    title(i) {
      return shuffle(titles)[i % titles.length];
    },
    vote_count() {
      return 9.983;
    },
    backdrop_path(i) {
      return shuffle(images)[i % images.length];
    },
    vote_average() {
      return 8.9;
    },
    overview() {
      return faker.fake("{{lorem.lines}}");
    },
    release_date() {
      return faker.fake("{{date.past}}");
    },
  }),
};
