import User from "@models/user";  // Stellen Sie sicher, dass Sie das richtige Modell für Ihre Benutzer verwenden.
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { email, hasPurchased } = await request.json();

    try {
        await connectToDB();

        // Finden Sie den Benutzer anhand seiner E-Mail-Adresse und aktualisieren Sie sein hasPurchased-Feld.
        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            { hasPurchased: hasPurchased },
            { new: true }
        );

        if (updatedUser) {
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        } else {
            return new Response("User not found", { status: 404 });
        }
    } catch (error) {
        return new Response("Failed to update purchase status", { status: 500 });
    }
}