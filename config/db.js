import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    // Bağlantı dizesinin varlığını kontrol etme
    if (!process.env.MONGO_URL) {
      throw new Error("MongoDB connection URL is not provided");
    }

    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Bağlantı başarılı ise bilgilendirme mesajı
    console.log(
      `Connected To MongoDB Database: ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    // Hata durumunda uygun bir hata mesajı gösterme
    console.error(`Error in MongoDB connection: ${error.message}`.bgRed.white);
    process.exit(1); // Uygulamadan çıkış yapma
  }
};

export default connectDB;
