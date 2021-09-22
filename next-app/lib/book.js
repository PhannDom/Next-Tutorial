import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid';

const booksDir = path.join(process.cwd(), 'books')

export const getBooks = () => {
    const bookFileNames = fs.readdirSync(booksDir)
    const booksData = bookFileNames.map(bookFileName => {
        const fullBookPath = path.join(booksDir, bookFileName)
        const bookContent = fs.readFileSync(fullBookPath, 'utf8')
        return {
            bookId: uuidv4(),
            bookName: bookFileName.replace(/\.txt$/, ''),
            bookContent: bookContent
        }
    })

    return booksData;
}