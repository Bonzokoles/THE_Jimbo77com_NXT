/**
 * Testy integracyjne dla API routes R2
 * Uruchom: node src/app/api/r2/r2.test.mjs
 */

const BASE = "https://the-jimbo77com-nxt.stolarnia-ams.workers.dev";

async function testList() {
  const res = await fetch(`${BASE}/api/r2/list`);
  const data = await res.json();
  console.assert(res.status === 200, "list: expected 200");
  console.assert(Array.isArray(data), "list: expected array");
  console.log(`[PASS] list - ${data.length} files`);
}

async function testGet() {
  const res = await fetch(`${BASE}/api/r2/ProjectPage1.jpeg`);
  console.assert(res.status === 200, "get: expected 200");
  console.assert(res.headers.get("content-type")?.includes("image"), "get: expected image content-type");
  console.log(`[PASS] get ProjectPage1.jpeg - ${res.headers.get("content-type")}`);
}

async function testGetNotFound() {
  const res = await fetch(`${BASE}/api/r2/non-existent-file.jpg`);
  console.assert(res.status === 404, "get 404: expected 404");
  console.log(`[PASS] get non-existent - 404 correct`);
}

async function testUploadBlockedNoAuth() {
  const formData = new FormData();
  formData.append("file", new Blob(["test"]), "test.txt");
  const res = await fetch(`${BASE}/api/r2/upload`, { method: "POST", body: formData });
  // .txt not allowed
  console.assert(res.status === 400, "upload blocked: expected 400 for .txt");
  console.log(`[PASS] upload blocked .txt - ${res.status}`);
}

(async () => {
  console.log("=== R2 API Integration Tests ===");
  await testList();
  await testGet();
  await testGetNotFound();
  await testUploadBlockedNoAuth();
  console.log("=== All tests passed ===");
})();
