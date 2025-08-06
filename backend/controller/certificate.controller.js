import Certificate from "../models/Certificate.js";

export const certificates = async (req, res) => {
  const certs = await Certificate.find(); // assuming Mongoose model
  res.json(certs);
};

export const getCertificate = async (req, res) => {
  try {
    // Find certificate by unique certId
    const cert = await Certificate.findOne({ certId: req.params.id });
    if (!cert) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.json(cert); // send single object
  } catch (error) {
    console.error("Error fetching certificate:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const certificate = async (req, res) => {
  try {
    const { studentName, course, grade, issueDate } = req.body;
    const certId = 'CERT-' + Math.floor(Math.random() * 100000);
    const newCertificate = new Certificate({
      certId,
      studentName,
      course,
      grade,
      issueDate,
      // status: 'Verified'
    });

    await newCertificate.save();
    res.status(201).json({ message: 'Certificate uploaded successfully', certId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload certificate' });
  }
};

export const update = async (req, res) => {
  try {
    const updatedCert = await Certificate.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedCert) {
      return res.status(404).json({ error: 'Certificate not found' });
    }
    res.json({ message: 'Certificate updated successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const deletedCert = await Certificate.findByIdAndDelete(req.params.id);
    if (!deletedCert) {
      return res.status(404).json({ error: 'Certificate not found' });
    }
    res.json({ message: 'Certificate deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


export const viewCertificate = async (req, res) => {
  try {
    const cert = await Certificate.findOne({ certId: req.params.certId });
    if (!cert) return res.status(404).json({ message: "Certificate not found" });
    res.json(cert);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};