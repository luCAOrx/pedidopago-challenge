import { DomainError } from '../../../core/domain/errors/DomainError'

export class ThumbnailValidation extends Error implements DomainError {
  public validate (thumbnail: string): boolean {
    const allowedFileType = 'jpeg' && 'pjpeg' && 'png' && 'jpg'

    if (!thumbnail) {
      this.name = 'ValidationErrorInThumbnailField'
      this.message = 'The thumbnail field is required.'

      return false
    }

    if (thumbnail.trim().length < 2) {
      this.name = 'ValidationErrorInThumbnailField'
      this.message = 'The thumbnail field allows at least 2 characters.'

      return false
    }

    if (thumbnail.trim().length > 255) {
      this.name = 'ValidationErrorInThumbnailField'
      this.message = 'The thumbnail field allows a maximum of 255 characters.'

      return false
    }

    if (!thumbnail.endsWith(allowedFileType)) {
      this.name = 'ValidationErrorInThumbnailField'
      this.message = 'The thumbnail field not accepts this file type.'

      return false
    }

    return true
  }
}
