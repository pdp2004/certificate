import Certificate from "../models/Certificate.js";

export const certificates = async (req, res) => {
    const certs = await Certificate.find(); // assuming Mongoose model
    res.json(certs);
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