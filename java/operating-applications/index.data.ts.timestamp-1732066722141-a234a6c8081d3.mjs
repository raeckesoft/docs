// @external/java/operating-applications/index.data.ts
import { basename } from "node:path";
import { createContentLoader } from "file:///Users/D044173/cap/docs/node_modules/vitepress/dist/node/index.js";

// @external/.vitepress/theme/components/indexFilter.ts
import { join } from "node:path";
var { base, themeConfig: { sidebar } } = global.VITEPRESS_CONFIG.site;
var indexFilter_default = (pages, basePath2) => {
  let items = findInItems(basePath2, sidebar) || [];
  items = items.map((item) => {
    return { ...item, link: item.link?.replace(/\.md$/, "") };
  });
  const itemLinks = items.map((item) => join(base, item.link || ""));
  return pages.map((p) => {
    p.url = p.url?.replaceAll("@external/", "")?.replace(/\/index$/, "/") || "";
    p.url = join(base, p.url);
    return p;
  }).filter((p) => {
    const item = items.find((item2) => item2.link && p.url.endsWith(item2.link));
    if (item) p.title = item.text;
    return !!item;
  }).filter((p) => !p.url.endsWith(basePath2)).sort((p1, p2) => itemLinks.indexOf(p1.url) - itemLinks.indexOf(p2.url)).map((p) => ({
    url: p.url,
    title: p.title,
    frontmatter: {
      synopsis: p.frontmatter.synopsis
    },
    // this data is inlined in each index page, so omit unnecessary data
    src: void 0,
    html: void 0,
    excerpt: void 0
  }));
};
function findInItems(url, items = []) {
  let res = items.find((item) => item.link?.includes(url));
  if (res) return res.items;
  for (const item of items) {
    const result = findInItems(url, item.items);
    if (result) return result;
  }
}

// @external/java/operating-applications/index.data.ts
var __vite_injected_original_dirname = "/Users/D044173/cap/docs/@external/java/operating-applications";
var basePath = basename(__vite_injected_original_dirname);
var index_data_default = createContentLoader(`**/${basePath}/*.md`, {
  transform(rawData) {
    return indexFilter_default(rawData, `/${basePath}/`);
  }
});
export {
  index_data_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiQGV4dGVybmFsL2phdmEvb3BlcmF0aW5nLWFwcGxpY2F0aW9ucy9pbmRleC5kYXRhLnRzIiwgIkBleHRlcm5hbC8udml0ZXByZXNzL3RoZW1lL2NvbXBvbmVudHMvaW5kZXhGaWx0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvRDA0NDE3My9jYXAvZG9jcy9AZXh0ZXJuYWwvamF2YS9vcGVyYXRpbmctYXBwbGljYXRpb25zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvRDA0NDE3My9jYXAvZG9jcy9AZXh0ZXJuYWwvamF2YS9vcGVyYXRpbmctYXBwbGljYXRpb25zL2luZGV4LmRhdGEudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL0QwNDQxNzMvY2FwL2RvY3MvQGV4dGVybmFsL2phdmEvb3BlcmF0aW5nLWFwcGxpY2F0aW9ucy9pbmRleC5kYXRhLnRzXCI7aW1wb3J0IHsgYmFzZW5hbWUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBjcmVhdGVDb250ZW50TG9hZGVyIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IGZpbHRlciBmcm9tICcuLi8uLi8udml0ZXByZXNzL3RoZW1lL2NvbXBvbmVudHMvaW5kZXhGaWx0ZXIudHMnXG5cbmNvbnN0IGJhc2VQYXRoID0gYmFzZW5hbWUoX19kaXJuYW1lKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250ZW50TG9hZGVyKGAqKi8ke2Jhc2VQYXRofS8qLm1kYCwge1xuICB0cmFuc2Zvcm0ocmF3RGF0YSkge1xuICAgIHJldHVybiBmaWx0ZXIocmF3RGF0YSwgYC8ke2Jhc2VQYXRofS9gKVxuICB9XG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvRDA0NDE3My9jYXAvZG9jcy9AZXh0ZXJuYWwvLnZpdGVwcmVzcy90aGVtZS9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvRDA0NDE3My9jYXAvZG9jcy9AZXh0ZXJuYWwvLnZpdGVwcmVzcy90aGVtZS9jb21wb25lbnRzL2luZGV4RmlsdGVyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9EMDQ0MTczL2NhcC9kb2NzL0BleHRlcm5hbC8udml0ZXByZXNzL3RoZW1lL2NvbXBvbmVudHMvaW5kZXhGaWx0ZXIudHNcIjtjb25zdCB7IGJhc2UsIHRoZW1lQ29uZmlnOiB7IHNpZGViYXIgfX0gPSBnbG9iYWwuVklURVBSRVNTX0NPTkZJRy5zaXRlXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgQ29udGVudERhdGEsIERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcydcblxudHlwZSBDb250ZW50RGF0YUN1c3RvbSA9IENvbnRlbnREYXRhICYge1xuICB0aXRsZT86c3RyaW5nXG59XG5cbnR5cGUgU0JJdGVtID0gRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtXG5cbmV4cG9ydCBkZWZhdWx0IChwYWdlczpDb250ZW50RGF0YUN1c3RvbVtdLCBiYXNlUGF0aDpzdHJpbmcpOkNvbnRlbnREYXRhQ3VzdG9tW10gPT4ge1xuICBsZXQgaXRlbXMgPSBmaW5kSW5JdGVtcyhiYXNlUGF0aCwgc2lkZWJhcikgfHwgW11cbiAgaXRlbXMgPSBpdGVtcy5tYXAoaXRlbSA9PiB7IHJldHVybiB7IC4uLml0ZW0sIGxpbms6IGl0ZW0ubGluaz8ucmVwbGFjZSgvXFwubWQkLywgJycpIH19KVxuICBjb25zdCBpdGVtTGlua3MgPSBpdGVtcy5tYXAoaXRlbSA9PiBqb2luKGJhc2UsIGl0ZW0ubGlua3x8JycpKVxuXG4gIHJldHVybiBwYWdlc1xuICAgIC5tYXAocCA9PiB7XG4gICAgICBwLnVybCA9IHAudXJsPy5yZXBsYWNlQWxsKCdAZXh0ZXJuYWwvJywgJycpPy5yZXBsYWNlKC9cXC9pbmRleCQvLCAnLycpIHx8ICcnXG4gICAgICBwLnVybCA9IGpvaW4oYmFzZSwgcC51cmwpXG4gICAgICByZXR1cm4gcFxuICAgIH0pXG4gICAgLmZpbHRlcihwID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5saW5rICYmIHAudXJsLmVuZHNXaXRoKGl0ZW0ubGluaykpXG4gICAgICBpZiAoaXRlbSkgIHAudGl0bGUgPSBpdGVtLnRleHRcbiAgICAgIHJldHVybiAhIWl0ZW1cbiAgICB9KVxuICAgIC5maWx0ZXIocCA9PiAhcC51cmwuZW5kc1dpdGgoYmFzZVBhdGgpKVxuICAgIC5zb3J0KChwMSwgcDIpID0+IGl0ZW1MaW5rcy5pbmRleE9mKHAxLnVybCkgLSBpdGVtTGlua3MuaW5kZXhPZihwMi51cmwpKVxuICAgIC5tYXAocCA9PiAoe1xuICAgICAgdXJsOiBwLnVybCxcbiAgICAgIHRpdGxlOiBwLnRpdGxlLFxuICAgICAgZnJvbnRtYXR0ZXI6IHtcbiAgICAgICAgc3lub3BzaXM6IHAuZnJvbnRtYXR0ZXIuc3lub3BzaXNcbiAgICAgIH0sXG4gICAgICAvLyB0aGlzIGRhdGEgaXMgaW5saW5lZCBpbiBlYWNoIGluZGV4IHBhZ2UsIHNvIG9taXQgdW5uZWNlc3NhcnkgZGF0YVxuICAgICAgc3JjOnVuZGVmaW5lZCwgaHRtbDp1bmRlZmluZWQsIGV4Y2VycHQ6dW5kZWZpbmVkXG4gICAgfSkpXG59XG5cbmZ1bmN0aW9uIGZpbmRJbkl0ZW1zKHVybDpzdHJpbmcsIGl0ZW1zOlNCSXRlbVtdPVtdKTpTQkl0ZW1bXXx1bmRlZmluZWQge1xuICBsZXQgcmVzID0gaXRlbXMuZmluZChpdGVtID0+IGl0ZW0ubGluaz8uaW5jbHVkZXModXJsKSlcbiAgaWYgKHJlcykgIHJldHVybiByZXMuaXRlbXNcbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gZmluZEluSXRlbXModXJsLCBpdGVtLml0ZW1zKVxuICAgIGlmIChyZXN1bHQpICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVcsU0FBUyxnQkFBZ0I7QUFDaFksU0FBUywyQkFBMkI7OztBQ0FwQyxTQUFTLFlBQVk7QUFEb1YsSUFBTSxFQUFFLE1BQU0sYUFBYSxFQUFFLFFBQVEsRUFBQyxJQUFJLE9BQU8saUJBQWlCO0FBVTNhLElBQU8sc0JBQVEsQ0FBQyxPQUEyQkEsY0FBd0M7QUFDakYsTUFBSSxRQUFRLFlBQVlBLFdBQVUsT0FBTyxLQUFLLENBQUM7QUFDL0MsVUFBUSxNQUFNLElBQUksVUFBUTtBQUFFLFdBQU8sRUFBRSxHQUFHLE1BQU0sTUFBTSxLQUFLLE1BQU0sUUFBUSxTQUFTLEVBQUUsRUFBRTtBQUFBLEVBQUMsQ0FBQztBQUN0RixRQUFNLFlBQVksTUFBTSxJQUFJLFVBQVEsS0FBSyxNQUFNLEtBQUssUUFBTSxFQUFFLENBQUM7QUFFN0QsU0FBTyxNQUNKLElBQUksT0FBSztBQUNSLE1BQUUsTUFBTSxFQUFFLEtBQUssV0FBVyxjQUFjLEVBQUUsR0FBRyxRQUFRLFlBQVksR0FBRyxLQUFLO0FBQ3pFLE1BQUUsTUFBTSxLQUFLLE1BQU0sRUFBRSxHQUFHO0FBQ3hCLFdBQU87QUFBQSxFQUNULENBQUMsRUFDQSxPQUFPLE9BQUs7QUFDWCxVQUFNLE9BQU8sTUFBTSxLQUFLLENBQUFDLFVBQVFBLE1BQUssUUFBUSxFQUFFLElBQUksU0FBU0EsTUFBSyxJQUFJLENBQUM7QUFDdEUsUUFBSSxLQUFPLEdBQUUsUUFBUSxLQUFLO0FBQzFCLFdBQU8sQ0FBQyxDQUFDO0FBQUEsRUFDWCxDQUFDLEVBQ0EsT0FBTyxPQUFLLENBQUMsRUFBRSxJQUFJLFNBQVNELFNBQVEsQ0FBQyxFQUNyQyxLQUFLLENBQUMsSUFBSSxPQUFPLFVBQVUsUUFBUSxHQUFHLEdBQUcsSUFBSSxVQUFVLFFBQVEsR0FBRyxHQUFHLENBQUMsRUFDdEUsSUFBSSxRQUFNO0FBQUEsSUFDVCxLQUFLLEVBQUU7QUFBQSxJQUNQLE9BQU8sRUFBRTtBQUFBLElBQ1QsYUFBYTtBQUFBLE1BQ1gsVUFBVSxFQUFFLFlBQVk7QUFBQSxJQUMxQjtBQUFBO0FBQUEsSUFFQSxLQUFJO0FBQUEsSUFBVyxNQUFLO0FBQUEsSUFBVyxTQUFRO0FBQUEsRUFDekMsRUFBRTtBQUNOO0FBRUEsU0FBUyxZQUFZLEtBQVksUUFBZSxDQUFDLEdBQXNCO0FBQ3JFLE1BQUksTUFBTSxNQUFNLEtBQUssVUFBUSxLQUFLLE1BQU0sU0FBUyxHQUFHLENBQUM7QUFDckQsTUFBSSxJQUFNLFFBQU8sSUFBSTtBQUNyQixhQUFXLFFBQVEsT0FBTztBQUN4QixVQUFNLFNBQVMsWUFBWSxLQUFLLEtBQUssS0FBSztBQUMxQyxRQUFJLE9BQVMsUUFBTztBQUFBLEVBQ3RCO0FBQ0Y7OztBRDlDQSxJQUFNLG1DQUFtQztBQUl6QyxJQUFNLFdBQVcsU0FBUyxnQ0FBUztBQUVuQyxJQUFPLHFCQUFRLG9CQUFvQixNQUFNLFFBQVEsU0FBUztBQUFBLEVBQ3hELFVBQVUsU0FBUztBQUNqQixXQUFPLG9CQUFPLFNBQVMsSUFBSSxRQUFRLEdBQUc7QUFBQSxFQUN4QztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImJhc2VQYXRoIiwgIml0ZW0iXQp9Cg==
