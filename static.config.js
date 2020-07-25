const fs = require("fs");
const klaw = require("klaw");
const path = require("path");
const matter = require("gray-matter");

function getNotes() {
    const items = [];
    // Walk ("klaw") through notes directory and push file paths into items array //
    const getFiles = () =>
        new Promise((resolve) => {
            // Check if notes directory exists //
            if (fs.existsSync("./notes")) {
                klaw("./notes")
                    .on("data", (item) => {
                        // Filter function to retrieve .md files //
                        if (path.extname(item.path) === ".md") {
                            // If markdown file, read contents //
                            const data = fs.readFileSync(item.path, "utf8");
                            // Convert to frontmatter object and markdown content //
                            const dataObj = matter(data);
                            // Create slug for URL //
                            dataObj.data.slug = dataObj.data.title
                                .toLowerCase()
                                .replace(/ /g, "-")
                                .replace(/[^\w-]+/g, "");
                            // Remove unused key //
                            delete dataObj.orig;
                            // Push object into items array //
                            items.push(dataObj);
                        }
                    })
                    .on("error", (e) => {
                        console.log(e);
                    })
                    .on("end", () => {
                        // Resolve promise for async getRoutes request //
                        // notes = items for below routes //
                        resolve(items);
                    });
            } else {
                // If src/notes directory doesn't exist, return items as empty array //
                resolve(items);
            }
        });
    return getFiles();
}

var tgs = [];
var metaData = [];
async function getTags() {
    const notes = await getNotes();
    notes.forEach((p) => {
        p.data.tags.forEach((t) => {
            tgs.push(t);
        });
        metaData.push(p.data);
    });
    tgs = tgs.filter((v, i, self) => self.indexOf(v) === i);
    return tgs;
}

export default {

    getSiteData: () => ({
        siteTitle: 'Dev Notes Theme',
        tags: tgs
    }),
    getRoutes: async () => {
        const notes = await getNotes();
        const tags = await getTags();

        return [
            {
                path: '/',
                getData: () => ({
                    metaData,
                    notes,
                    pageTitle: "All Notes"
                }),
                children: notes.map(note => ({
                    path: `/note/${note.data.slug}`,
                    template: 'src/containers/NoteTemplate',
                    getData: () => ({
                        note,
                    }),
                })),
            },
            {
                path: "/tags",
                getData: () => ({
                    tags,
                }),
                template: 'src/containers/Tags',
                children: tags.map((t) => ({
                    path: `/${t}`,
                    template: 'src/containers/NotesByTagTemplate',
                    getData: () => {
                        let notes_meta_for_tag = [];
                        notes.forEach((n) => {
                            if (n.data.tags.includes(t)) {
                                notes_meta_for_tag.push(n.data);
                            }
                        });
                        return { "metaData": notes_meta_for_tag, "pageTitle": t };
                    },
                })),
            }
        ]
    },
    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],
}
