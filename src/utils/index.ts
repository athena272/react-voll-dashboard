export default function formatDate(data: string): string {
    const newDate = new Date(data).toLocaleDateString();

    return newDate
}