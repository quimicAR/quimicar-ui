import axios from 'axios'

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyRGV0YWlscyI6IntcImlkXCI6bnVsbCxcImZ1bGxOYW1lXCI6bnVsbCxcImVtYWlsXCI6XCJhZG1pbkBlbWFpbC5jb21cIixcInBhc3N3b3JkXCI6bnVsbCxcImVuYWJsZWRcIjpmYWxzZSxcInRva2VuXCI6bnVsbCxcInJvbGVcIjp7XCJyb2xlX2lkXCI6bnVsbCxcIm5hbWVcIjpcIlJPTEVfQURNSU5cIn19IiwiaXNzIjoiYnIuY29tLnF1aW1pY2FyIiwic3ViIjoiYWRtaW5AZW1haWwuY29tIiwiZXhwIjoxNjM1MTY1OTY3fQ.4OW-FPrIwhgFdO9Zn1QOQp_dO3fFv8H8ybY1-GTpyfDP4W1XwGGNkR4I4ceGu7L1_HsSn5uI30ILigq0ZKcKmQ'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default api

/**
 * TODO
 * - DetailsPageLayout for Users/Roles/Elements
 *    [ ]   - Modal for Edit/Create
 *    [ ]   - useAuth hook
 *    [ ]   - Create hook to deal with authenticated user
 *    [ ]   - Error handling in Front-end
 *    [X]   - Must have the title
 *    [X]   - Length number of the list
 *    [X]   - Must list
 *    [X]   - Have a button to Create new (User/Role/Element)
 *    [X]   - Have icon for Edit/Delete
 *  - AdminLayout
 *    [X]   - Add sidebar
 *    [X]   - Add buttons to Users/Roles/Elements details page
 */
